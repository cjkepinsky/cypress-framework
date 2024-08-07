interface ConfigInterface {
  env: string,
  baseUrl: string,
  credentials: {username: string, password: string},
  loginTheme: string,
  language: string,
}

const config: ConfigInterface = {
  env: Cypress.env('NODE_ENV') || 'local',
  baseUrl: Cypress.env('BASE_URL') || 'http://localhost:3000',
  credentials: {
    username: Cypress.env('USERNAME') || 'default_username',
    password: Cypress.env('PASSWORD') || 'default_password',
  },
  loginTheme: 'Flex',
  language: 'en_us',
}

const requiredEnvVars = ['NODE_ENV', 'BASE_URL', 'USERNAME', 'PASSWORD'];
requiredEnvVars.forEach(envVar => {
  if (!Cypress.env(envVar)) {
    throw new Error(`Environment variable ${envVar} is missing`);
  }
});

export default config