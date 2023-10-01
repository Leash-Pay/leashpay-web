#!/usr/bin/env bash
set -e

# First Check if .env file exists
if [ ! -f $APP_ROOT/.env ]; then
    if [ -z ${ERROR_TEXT+x} ]; then
        echo "No .env file found. Please create one from the .env.example file."
    else
        echo -e "${ERROR_TEXT} No .env file found. Please create one from the .env.example file."
    fi
    cp $APP_ROOT/.env.example $APP_ROOT/.env
fi

# Load Env Variables From .env if Exists
if [ -f $APP_ROOT/.env ]; then
  export $(cat $APP_ROOT/.env | xargs)
fi

# Install vendor packages if none is found
if [ ! -d $APP_ROOT/vendor ]; then
    composer install
fi

# Check if APP_KEY is set in .env file
if ! grep -q "APP_KEY=base64:" $APP_ROOT/.env; then
    php $APP_ROOT/artisan key:generate
fi

if ! grep -q "APP_KEY=base64:" .env; then
    php artisan key:generate
fi

if [ -z "$APP_KEY" ]; then
    php artisan key:generate
fi

db_username="${API_DB_USERNAME}"
db_password="${API_DB_PASSWORD}"
db_connection="${API_DB_CONNECTION}"
db_host="${API_DB_HOST}"
db_port="${API_DB_PORT}"

# Check if migrations have been run, else run migrations
# We'll assume the migration table is empty if the migrations haven't been run
if ! php $APP_ROOT/artisan migrate:status 2>/dev/null | grep -q 'Yes|Ran'; then
    php $APP_ROOT/artisan migrate:fresh --seed
fi

exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf