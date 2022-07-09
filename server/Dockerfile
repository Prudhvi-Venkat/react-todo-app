FROM node:16-alpine
LABEL pern-todo_server="server"
WORKDIR /server
COPY package.json .
RUN yarn install
EXPOSE 5000
COPY . .
CMD ["yarn", "server"]