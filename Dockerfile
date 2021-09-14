FROM node

RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/node/app

COPY package.json yarn.* ./

RUN yarn

COPY . /home/node/app/

RUN yarn add sequelize-cli -D    

EXPOSE 3333