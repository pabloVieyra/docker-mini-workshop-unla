# Construir la imagen (desde la misma carpeta que el Dockerfile)

docker build -t mi-app-node .

# Ejecutar el contenedor

docker run -p 3000:3000 -d mi-app-node
