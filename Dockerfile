FROM node:16-alpine

RUN mkdir app
WORKDIR /app
COPY package.json /app
RUN yarn install
EXPOSE 3000

CMD ["yarn", "dev"]
