
FROM node:14.16-alpine

ENV NODE_ENV=production
WORKDIR "/miko"

RUN yarn global add typescript

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

RUN yarn build

COPY . .

EXPOSE 5000

CMD [ "yarn", "start" ]