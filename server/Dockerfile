FROM node:18-alpine as dependencies

WORKDIR /usr/src/service/server

COPY package*.json ./
COPY src ./src
COPY tsconfig.json ./

RUN npm ci


FROM node:18-alpine as builder

WORKDIR /usr/src/service/server

COPY --from=dependencies /usr/src/service/server ./

RUN npm run build