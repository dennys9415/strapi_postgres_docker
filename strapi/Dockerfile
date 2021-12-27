FROM node:14.18.2-alpine

#create destination directory
RUN mkdir -p /usr/src/strapi-app
WORKDIR /usr/src/strapi-app

#update and install dependency
RUN apk update && apk upgrade
RUN apk add git

#copy the app, note .dockerignore
COPY . /usr/src/strapi-app/
RUN yarn install
RUN yarn add pg

#build necessary, even if no static files are needed, 
#since it builds the server as well
RUN yarn build

#exposer 5000 on container
EXPOSE 1337

#start the app
CMD ["yarn","start"]

##commands to docker //docker build -t dennystest . 
#                    //docker run -it -p 1337:1337 dennystest