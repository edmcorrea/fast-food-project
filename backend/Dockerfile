FROM node:16
WORKDIR /app-backend
COPY package*.json .
RUN npm install
COPY . .
RUN npx prisma generate
EXPOSE 3001
CMD ["npm", "start"]