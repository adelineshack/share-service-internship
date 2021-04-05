FROM node:15.13.0

WORKDIR /home/app/web/
COPY ./package.json /home/app/web/package.json
COPY ./package-lock.json /home/app/web/package-lock.json

RUN npm install

COPY ./public /home/app/web/public
COPY ./src /home/app/web/src

RUN npm run build

COPY ./move_build_to_volume.sh /home/app/web/move_build_to_volume.sh