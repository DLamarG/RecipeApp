#!/bin/bash

# These environment variables are consumed by the docker-compose file.
# We can supply explicit defaults that are checked in with source code 
# since they are only used for local development.
export SECRET_KEY=food123
export DEBUG=True
export POSTGRES_DB=recipe_app_db
export POSTGRES_USER=postgres
export POSTGRES_PASSWORD=postgres

docker-compose -f docker_compose.dev.yml up -d --build

# make sure the postgres container is ready, then run migrations
sleep 10 
docker exec assessement-5-recipe_api-1  python /src/manage.py makemigrations 
docker exec assessement-5-recipe_api-1  python /src/manage.py migrate