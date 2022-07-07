FROM node:16
WORKDIR /server
COPY package.json .
RUN yarn install
COPY . .
CMD yarn start