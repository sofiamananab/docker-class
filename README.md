# Construye la imagen de Docker de la primera aplicación

docker build -t first_app .

# Construye la imagen de Docker de la segunda aplicación

docker build -t second_app .

# Ejecuta un contenedor basado en la imagen de la primera aplicación que acabas de crear

docker run -p 3000:3000 -d --name first_container first_app

# Ejecuta un contenedor basado en la imagen de la segunda aplicación que acabas de crear

docker run -p 3001:3001 -d --name second_container second_app

# Crea un red de Docker

docker network create example-network
docker network connect example-network [contenedor]
