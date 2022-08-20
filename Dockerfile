FROM node:18

COPY . /app/
WORKDIR /app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# For the sake of development, all packages should be installed outside the working directory (so we can mount safely).
# Adding the bin to path will help with running the commands
ENV NODE_PATH /etc/ffl-api/node_modules
COPY package.json /etc/ffl-api/package.json
RUN yarn install --cwd /etc/ffl-api

# For whatever reason create react app does not respect the node path. Creating a symlink between the app's local
# node_modules and the actual node_modules folder allows us to store the files in another location and still lets
# the app access the modules
RUN ln -s /etc/ffl-api/node_modules /app/node_modules
ENV PATH="${PATH}:/etc/ffl-api/node_modules/.bin"