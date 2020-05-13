FROM node:10-alpine
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
EXPOSE 80
CMD ["npm", "start"]