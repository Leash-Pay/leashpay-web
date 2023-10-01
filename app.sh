#!/usr/bin/env bash

DOCKER_COMPOSE="docker-compose"

if docker help | grep -q '^ *compose'; then
    DOCKER_COMPOSE="docker compose"
fi

$DOCKER_COMPOSE exec api bash
