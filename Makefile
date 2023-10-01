OS_NAME := $(shell uname -s)

# Load binary versions from .env file
DOCKER := $(shell docker -v)
ESLINT := $(shell eslint -v)
HOST_FILE := $(shell cat /etc/hosts)
DOCKER_COMPOSE := $(shell docker help | grep -q '^ *compose' && echo "docker compose" || echo "docker-compose")
ALL_CONTAINERS=$(DOCKER_COMPOSE) -f docker-compose.yml

# Export the GID and UID of the current user
UID := $(shell id -u)
GID := $(shell id -g)

export UID GID

# Define the commands that will be used in the Makefile
.PHONY: start
start:
	$(DOCKER_COMPOSE) up -d $(params)
%: # catch all extra arguments
	@: # this will ignore all extra arguments that has no effect

.PHONY: stop
stop:
	$(DOCKER_COMPOSE) down -v

.PHONY: build-all
build-all:
	$(DOCKER_COMPOSE) -f configs/docker-base-image.yml build
	$(DOCKER_COMPOSE) build api
	$(ALL_CONTAINERS) build

.PHONY: start-all
start-all:
	$(ALL_CONTAINERS) up -d $(params)
%: # catch all extra arguments
	@: # this will ignore all extra arguments that has no effect

.PHONY: stop-all
stop-all:
	$(ALL_CONTAINERS) stop

.PHONY: down-all
down-all:
	$(ALL_CONTAINERS) down -v

.PHONY: build-up
build-up:
	$(ALL_CONTAINERS) up --build

.PHONY: docker-logs
docker-logs:
	$(ALL_CONTAINERS) logs -f

.PHONY: status
status:
	$(ALL_CONTAINERS) ps

.PHONY: scale-up
scale-up:
	./scale-up.sh $(filter-out $@,$(MAKECMDGOALS))
%: # catch all extra arguments
	@: # this will ignore all extra arguments that has no effect
