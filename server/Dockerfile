FROM node:14

WORKDIR /server-app
COPY package.json .
RUN npm install
COPY . .
RUN yarn gen
CMD npm start