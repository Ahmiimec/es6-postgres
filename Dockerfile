FROM node:16
WORKDIR /app
COPY package.json .app
RUN yarn
COPY . ./
EXPOSE 5000
CMD ["yarn","dev"]