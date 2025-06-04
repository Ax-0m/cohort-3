FROM node:20-alpine

WORKDIR /app

# Install netcat for health check
RUN apk add --no-cache netcat-openbsd

COPY ./package.json ./package.json

COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev:docker"]