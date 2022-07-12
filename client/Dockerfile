FROM node:16 as development
WORKDIR /client
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
EXPOSE 3000
RUN ["yarn","run", "build"]
# ENTRYPOINT ["nginx", "-g", "daemon off;"]
