FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies

COPY package*.json ./
RUN mkdir -p  /usr/src/app/learning-dashboard
RUN npm install
# If you are building your code for production
RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "server.js" ]
