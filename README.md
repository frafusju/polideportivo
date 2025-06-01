# Construir los servicios definidos en docker-compose.yml
docker-compose build

# Levantar los servicios
docker-compose up -d

#Limpiar configuracion
docker-compose exec laravel php artisan config:clear

#Ejecutar las migraciones
docker exec -it laravel-app php artisan migrate

#Ejecutar los seeders
docker exec -it laravel-app php artisan db:seed

# Mostrar los logs
docker-compose logs -f

#Parar los servicios
docker-compose down -v


