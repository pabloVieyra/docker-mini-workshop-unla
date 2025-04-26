# Levantar ngnix live

docker run --name mi-nginx-personalizado \
 -p 8080:80 \
 -v $(pwd)/{carpeta}:/usr/share/nginx/html \
 -d nginx
