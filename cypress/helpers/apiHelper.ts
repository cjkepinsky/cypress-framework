import config from 'config/config';

interface LoginResponse {
  body: any;
}

interface FullLoginResponse extends Cypress.Response<LoginResponse> {
  headers: {
    'set-cookie': string[];
  };
}

interface LoginCredentials {
  username: string;
  password: string;
}

export default class ApiHelper {
  private static parseSetCookieHeader(cookieString: string): [string, string, Partial<Cypress.CookieOptions>] {
    const [nameValue, ...options] = cookieString.split(';');
    const [name, value] = nameValue.trim().split('=');

    const cookieOptions: { [key: string]: any } = {};

    options.forEach(option => {
      const [key, val] = option.trim().split('=');
      switch (key.toLowerCase()) {
        case 'domain':
          cookieOptions.domain = val;
          break;
        case 'path':
          cookieOptions.path = val;
          break;
        case 'secure':
          cookieOptions.secure = true;
          break;
        case 'httponly':
          cookieOptions.httpOnly = true;
          break;
        case 'samesite':
          cookieOptions.sameSite = val;
          break;
        case 'expires':
          cookieOptions.expiry = new Date(val).getTime();
          break;
      }
    });

    return [name, value, cookieOptions as Partial<Cypress.CookieOptions>];
  }

  static login(credentials: LoginCredentials): Cypress.Chainable<Cypress.Response<LoginResponse>> {
    return cy.request<LoginResponse>({
      method: 'POST',
      url: `https://demo.1crmcloud.com/json.php?action=login`,
      body: {
        username: credentials.username,
        password: credentials.password,
        theme: config.loginTheme,
        no_persist_theme: 1,
        login_module: 'Home',
        login_action: 'index',
        language: config.language,
        res_height: Cypress.config('viewportHeight'),
        res_width: Cypress.config('viewportWidth'),
        gmto: -420
      }
    });
  }

  static setCookieFromResponse(response: FullLoginResponse): void {
    console.log('response: ', response)
    const cookieString = response.headers['set-cookie'][0];
    const [name, value, options] = this.parseSetCookieHeader(cookieString);
    console.log(`Cookie name: ${name} value: ${value} options: ${options}`)
    cy.setCookie(name, value, options);
    cy.log(`Cookie '${name}' set with value: ${value}`);
  }

  static loginAndSetCookie(credentials: LoginCredentials): Cypress.Chainable<LoginResponse> {
    return this.login(credentials).then((response: Cypress.Response<LoginResponse>) => {
      console.log("login() response: ", response)
      const fullResponse = response as unknown as FullLoginResponse;
      this.setCookieFromResponse(fullResponse);
      return cy.wrap(response.body);
    });
  }
}