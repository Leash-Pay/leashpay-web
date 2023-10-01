FROM payapp-base-image:latest

ARG user

COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

RUN touch /var/log/nginx/error.log && chown $user:$user /var/log/nginx/error.log
RUN touch /run/nginx.pid && chown $user:$user /run/nginx.pid

RUN chown -R www-data:www-data /var/log/nginx && chmod -R 777 /var/log/nginx && chown -R www-data:www-data /var/log/supervisor && chmod -R 777 /var/log/supervisor
RUN mkdir -p /var/lib/nginx/ /var/www/lib/proxy && chown -R www-data:www-data /var/lib/nginx/ && chmod -R 777 /var/lib/nginx/

ENTRYPOINT ["entrypoint.sh"]
EXPOSE 80 443

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
