FROM node:16-alpine
WORKDIR /server
COPY package.json .
COPY yarn.lock .
RUN yarn install
EXPOSE 5000
COPY . .
CMD ["yarn", "server"]