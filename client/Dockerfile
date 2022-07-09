FROM node:16-alpine
LABEL pern-todo_client="client"
WORKDIR /client
COPY package.json .
RUN yarn install
COPY . .
EXPOSE 3000
RUN ["yarn", "build"]
