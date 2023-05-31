FROM node:14 AS ui-build

WORKDIR /app/frontend

COPY /frontend/package*.json ./

RUN npm install

COPY /frontend/src/ ./src

COPY /frontend/public/ ./public

RUN npm run build

FROM node:14 AS server-build

WORKDIR /app/

COPY --from=ui-build /app/frontend/build ./frontend/build

WORKDIR /app/backend

COPY /backend/package*.json ./

RUN npm install

COPY backend/ ./

EXPOSE 3001

CMD [ "npm", "start" ]