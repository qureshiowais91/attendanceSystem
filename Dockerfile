# Use node base image for building
FROM node:20-buster

WORKDIR /app

COPY package.json .



RUN npm update
RUN rm -rf package-lock.json
RUN npm install vite@latest --save-dev
RUN npm install  --force --legacy-peer-deps

COPY . .

EXPOSE 5173

CMD ["npm","run","dev","--","--host"] 