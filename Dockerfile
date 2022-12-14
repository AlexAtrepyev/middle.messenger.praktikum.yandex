FROM node:16-alpine AS builder

WORKDIR /var/www/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build:prod

FROM node:16-alpine AS production

WORKDIR /var/www/production

COPY --from=builder /var/www/app/package*.json ./

RUN npm install --production

COPY --from=builder /var/www/app/dist ./dist
COPY --from=builder /var/www/app/server.ts ./

EXPOSE 3000

CMD npm run docker:run
