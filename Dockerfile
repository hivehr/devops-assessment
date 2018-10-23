FROM node:8.12.0-alpine

ENV PORT=3000

WORKDIR /usr/app

COPY . /usr/app

EXPOSE 3000

RUN npm install && \
    npm run test

ENTRYPOINT ["node", "src"]