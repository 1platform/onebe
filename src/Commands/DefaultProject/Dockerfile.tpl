# build environment
FROM node:current-alpine AS build
RUN apk add --no-cache git bash
RUN mkdir -pv /opt/onebe/backend

WORKDIR /opt/onebe/backend

COPY . /opt/onebe/backend
ENV NODE_ENV=development
RUN yarn --version
RUN yarn

RUN yarn build:docker
ENV NODE_ENV=production
RUN yarn install

RUN apk del git bash

# prod environment
FROM node:current-alpine

WORKDIR /opt/onebe/backend

COPY --from=build /opt/onebe/backend/node_modules ./node_modules
COPY --from=build /opt/onebe/backend/package.json ./package.json
COPY --from=build /opt/onebe/backend/dist ./

RUN mkdir -pv /opt/onebe/uploads
RUN mkdir -pv /opt/onebe/temp

VOLUME /opt/onebe/storage
VOLUME /opt/onebe/temp

ENV APP_PORT 7200
EXPOSE $APP_PORT
CMD ["yarn", "start:docker"]
