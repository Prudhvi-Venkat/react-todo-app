FROM node:16 as build-stage
WORKDIR /client
COPY package.json .
RUN yarn install
COPY . .
EXPOSE 3000
ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL
RUN yarn build
