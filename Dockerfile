FROM cypress/browsers:node18.12.0-chrome107-ff106

WORKDIR /app

# Kopiuj pliki package.json i package-lock.json (jeśli istnieje)
COPY package*.json ./

# Instaluj zależności
RUN npm ci

# Kopiuj resztę kodu źródłowego
COPY . .

# Uruchom testy
CMD ["npm", "run", "demo-run"]