FROM node:16
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
ENV ANALYZE=true
EXPOSE 3000
RUN yarn build
CMD [ "yarn", "start" ]