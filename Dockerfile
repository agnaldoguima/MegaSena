FROM httpd:2.4
ENV     SERVER_FOLDER=/usr/local/apache2/htdocs/
COPY ./public ${SERVER_FOLDER}