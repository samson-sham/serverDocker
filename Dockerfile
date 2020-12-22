FROM node:14-alpine

WORKDIR /temp/

COPY package.json ./

RUN npm install
COPY . .

EXPOSE 8964

CMD ["node", "server.js"]