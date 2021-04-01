FROM node:15

RUN mkdir /app

WORKDIR /app

ADD app.js /app

ADD package.json /app

RUN npm install 
RUN npm install express -g
RUN npm install nodemon -g

EXPOSE 3000

CMD ["nodemon", "--legacy-watch", "app.js"]