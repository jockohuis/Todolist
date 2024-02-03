FROM ubuntu
RUN apt-get update
RUN apt-get install -y nginx
RUN rm -rf /var/www/html/*
RUN https://github.com/jockohuis/Todolist.git  /var/www/html/
EXPOSE 80
LABEL maintainer="jockohuis<jockohuis@gmail.com>"
CMD ["nginx","-g","daemon off;"]
