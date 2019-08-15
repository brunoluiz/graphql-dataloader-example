FROM node:10-alpine

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=4000
ENV PORT $PORT
EXPOSE $PORT 9229 9230

RUN npm i npm@latest -g

WORKDIR /opt
COPY package.json package-lock.json* ./
RUN npm install --no-optional && npm cache clean --force
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . /opt/app

USER node

CMD [ "npm", "run", "start" ]
