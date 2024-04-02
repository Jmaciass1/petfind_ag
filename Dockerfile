FROM node:carbon-slim

# Create app directory
WORKDIR /petfind_ag

# Install app dependencies
COPY package.json /petfind_ag/
RUN npm install

# Bundle app source
COPY . /petfind_ag/
RUN npm run prepublish
EXPOSE 5000

EXPOSE 5000

CMD [ "npm", "run", "runServer" ]
