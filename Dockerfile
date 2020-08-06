FROM node:12.18.3

ENV PORT 3004

RUN mkdir app/

COPY package*.json app/

RUN npm install

COPY . app/

RUN npm run build

EXPOSE 3004

CMD "npm" "run" "start"