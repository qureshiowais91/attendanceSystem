# Use node base image for building
FROM node:20-buster

WORKDIR /app

COPY package.json .

RUN npm install -g npm@10.6.0


RUN npm update
RUN npm install @rollup/rollup-linux-x64-gnu --save-optional
RUN npm install vite@latest --save-dev
RUN npm install  --force --legacy-peer-deps

COPY . .

EXPOSE 5173

CMD ["npm","run","dev","--","--host"] 