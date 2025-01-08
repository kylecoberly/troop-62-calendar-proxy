#!/bin/bash

sudo docker buildx build -t troop-62-calendar-proxy .
sudo docker run \
--init \
--name troop-62-calendar-proxy \
--user 'node' \
--restart always \
--publish 3010:3010 \
--env 'PORT=3010' \
--workdir '/app' \
--volume /var/www/troop-62-calendar-proxy:/app \
--volume /var/run/docker.sock:/var/run/docker.sock:ro \
troop-62-calendar-proxy
