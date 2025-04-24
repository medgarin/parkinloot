FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install nestjs-seeder --save-dev

COPY . .

RUN npm run build

EXPOSE 4000

CMD [ "npm", "run", "start:dev" ]