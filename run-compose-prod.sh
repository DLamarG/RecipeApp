#!/bin/sh

# The Dockerhub account where the images are stored
export DOCKERHUB_UNAME=dlamarg

# These environment variables come from command line arguments.
# They are consumed by the docker-compose file.
export SECRET_KEY=$1
export DEBUG=$2
export POSTGRES_DB=$3
export POSTGRES_USER=$4
export POSTGRES_PASSWORD=$5
export NEW_VERSION=$6
export AWS_ACCESS_KEY_ID=$7
export AWS_SECRET_ACCESS_KEY=$8

docker-compose -f docker_compose.prod.yml build --no-cache
docker-compose -f docker_compose.prod.yml up -d

# make sure the postgres container is ready, then run migrations
sleep 10 
docker exec ec2-user-recipe-api-1 python /src/manage.py makemigrations 
docker exec ec2-user-recipe-api-1 python /src/manage.py migrate