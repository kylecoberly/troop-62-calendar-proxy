FROM node:23 AS base
WORKDIR /app
USER root

COPY ./package.json .
COPY ./package-lock.json .
RUN npm ci

COPY . .

FROM base as production
ENV NODE_ENV="production"
ENV PORT="4000"
USER node
ENTRYPOINT ["npm", "start"]
