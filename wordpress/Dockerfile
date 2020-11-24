FROM php:7-fpm-alpine

# Fatal error: Call to undefined function mysql_connect()
# PHP7ではmysql関数が使えないので、mysqliをインストール
# https://www.kryupi.com/mysql_connect%E3%82%A8%E3%83%A9%E3%83%BC%E3%81%A7wordpress%E3%81%8C%E5%8B%95%E3%81%8B%E3%81%AA%E3%81%84/
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli
COPY php.ini /usr/local/etc/php

WORKDIR /var/www/html
