FROM node:22
WORKDIR /app

# install dependencies
COPY package*.json .
RUN npm ci

# build the source code
COPY . .
RUN npm run build

# expose and run
ENV PORT=3000
EXPOSE 3000
CMD ["npm", "run", "dev"]
