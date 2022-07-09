FROM node:16 as build
WORKDIR /client
COPY package.json .
RUN yarn install
COPY . .
EXPOSE 3000
RUN ["yarn", "run","build"]
