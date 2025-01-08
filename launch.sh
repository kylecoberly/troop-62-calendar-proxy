#!/bin/bash

sudo docker run \
--init \
--name troop-62-calendar-proxy \
--user "node" \
--restart always \
--publish 3010:3010 \
--env "PORT=3010" \
--workdir "/home/node/app" \
--volume nextcloud_aio_mastercontainer:/mnt/docker-aio-config \
--volume /var/www/troop-62-calendar-proxy:/home/node/app:ro \
--entrypoint "sh -c 'npm i && npm start'" \
node:23
