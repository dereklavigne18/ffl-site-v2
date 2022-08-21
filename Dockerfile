FROM node:18

COPY . /app/
WORKDIR /app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# For the sake of development, all packages should be installed outside the working directory (so we can mount safely).
# Adding the bin to path will help with running the commands
ENV NODE_PATH /etc/ffl-site/node_modules
COPY package.json /etc/ffl-site/package.json
RUN yarn install --cwd /etc/ffl-site
ENV PATH="${PATH}:/etc/ffl-site/node_modules/.bin"