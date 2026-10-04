FROM cypress/included:15.15.0

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["npm", "run", "demo:run"]