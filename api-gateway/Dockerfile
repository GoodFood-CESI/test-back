FROM debian:10 AS api-gateway-nodejs

RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_20.x | bash \
    && apt-get install nodejs -yq \
    && apt-get clean -y

ADD . /app/

WORKDIR /app

RUN npm install

EXPOSE 5000

CMD node index