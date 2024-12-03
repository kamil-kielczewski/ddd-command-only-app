FROM node:23.3.0

WORKDIR /work

RUN npm install -g n jest ts-node

EXPOSE 3002