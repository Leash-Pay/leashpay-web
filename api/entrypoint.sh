#!/usr/bin/env bash
set -e

# Create the writable bootstrap cache directory if it doesn't exist
if [ ! -d $APP_ROOT/bootstrap/cache ]; then
    mkdir -p $APP_ROOT/bootstrap/cache
fi

chown -R www:www $APP_ROOT/bootstrap/cache
chmod -R 775 $APP_ROOT/bootstrap/cache

# Create the writable storage directory if it doesn't exist
directories=("sessions" "views" "cache")

# Iterate over each directory and create it if it doesn't exist
for dir in "${directories[@]}"; do
    if [ ! -d "$APP_ROOT/storage/framework/$dir" ]; then
        mkdir -p "$APP_ROOT/storage/framework/$dir"
    fi
done

# Set the necessary permissions
chown -R www:www $APP_ROOT/storage
chmod -R 775 $APP_ROOT/storage
chmod 664 $APP_ROOT/storage/framework/.gitignore

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

# Check APP_ENV and substitute DB values if not in production or staging
if [ "$APP_ENV" != "production" ] && [ "$APP_ENV" != "staging" ]; then
    if [ -n "$API_DB_CONNECTION" ] && [ -z "$db_connection" ]; then
        sed -i "s/API_DB_CONNECTION=.*/API_DB_CONNECTION=${API_DB_CONNECTION}/" $APP_ROOT/.env
    fi

    if [ -n "$API_DB_HOST" ] && [ -z "$db_host" ]; then
        sed -i "s/API_DB_HOST=.*/API_DB_HOST=${API_DB_HOST}/" $APP_ROOT/.env
    fi

    if [ -n "$API_DB_PORT" ] && [ -z "$db_port" ]; then
        sed -i "s/API_DB_PORT=.*/API_DB_PORT=${API_DB_PORT}/" $APP_ROOT/.env
    fi

    if [ -n "$API_DB_USERNAME" ] && ( [ -z "${db_username}" ] || [ "${db_username}" = "root" ] ); then
        sed -i "s/API_DB_USERNAME=.*/API_DB_USERNAME=${API_DB_USERNAME}/" $APP_ROOT/.env
    fi

    if [ -n "$API_DB_PASSWORD" ]&& [ -z "${db_password}" ]; then
        sed -i "s/API_DB_PASSWORD=.*/API_DB_PASSWORD=${API_DB_PASSWORD}/" $APP_ROOT/.env
    fi
fi


# Check if migrations have been run, else run migrations
# We'll assume the migration table is empty if the migrations haven't been run
if ! php $APP_ROOT/artisan migrate:status 2>/dev/null | grep -q 'Yes|Ran'; then
    php $APP_ROOT/artisan migrate:fresh --seed
fi

exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
