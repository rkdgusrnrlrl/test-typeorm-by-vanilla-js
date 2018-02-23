#!/usr/bin/env bash

if [[ "$(docker ps -a | grep some-postgres 2> /dev/null)" != "" ]]; then
  docker rm -f some-postgres
fi

docker run --name some-postgres -e POSTGRES_PASSWORD=rkd123 -d -p 5432:5432 postgres