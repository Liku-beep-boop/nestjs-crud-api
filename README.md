# NestJS CRUD API

Este proyecto es una implementación de una API REST CRUD siguiendo la guía de FreeCodeCamp: [Build a CRUD REST API with NestJS, Docker, Swagger, Prisma](https://www.freecodecamp.org/news/build-a-crud-rest-api-with-nestjs-docker-swagger-prisma/).

## Tecnologías Utilizadas
- [NestJS](https://nestjs.com/) - Framework de Node.js para construir aplicaciones escalables
- [Docker](https://www.docker.com/) - Contenerización para simplificar el despliegue y la gestión
- [Swagger](https://swagger.io/) - Documentación de API interactiva
- [Prisma](https://www.prisma.io/) - ORM para bases de datos
- [PostgreSQL](https://www.postgresql.org/) - Base de datos relacional

## Instalación y Configuración

### 1. Clonar el Repositorio
```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

### 2. Configurar Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto con la siguiente configuración:
```env
DATABASE_URL="postgresql://usuario:password@localhost:5432/nombre_db"
PORT=3000
```

### 3. Instalación de Dependencias
```bash
npm install
```

### 4. Configurar la Base de Datos con Prisma
```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Levantar el Proyecto con Docker
```bash
docker-compose up -d
```

O bien, ejecutarlo de forma local:
```bash
npm run start
```

## Uso de la API

### Documentación con Swagger
Una vez corriendo el servidor, accede a la documentación en:
```
http://localhost:3000/api
```

### Endpoints Disponibles
| Método | Endpoint        | Descripción |
|---------|---------------|-------------|
| GET     | /recipe        | Obtener todos los items |
| GET     | /recipe/:id    | Obtener un item por ID |
| POST    | /recipe        | Crear un nuevo item |
| PUT     | /recipe/:id    | Actualizar un item |
| DELETE  | /recipe/:id    | Eliminar un item |

## Contribución
Si deseas mejorar este proyecto, realiza un fork del repositorio y envía un Pull Request con tus cambios.

## Licencia
Este proyecto está bajo la licencia MIT.

