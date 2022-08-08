# 3ra Entrega Proyecto Final

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Routes

- /login - Login page
- /main - Main page
  - /alumnos - Alumnos page
  - /cursos - Cursos page
  - /inscripciones - Inscripciones page
  - /usuarios - Usuarios page

### API

Run `npm run api` to start the local API containing the data for the various services

The API is available at `http://localhost:3000/` provided by `json-server-auth`

### API Documentation

/users - List of users

```json
{
  "users": [
    {
      "email": "admin@example.com",
      "password": "hashedPassword",
      "username": "admin",
      "role": "admin",
      "id": 1
    },
    {
      "email": "user@example.com",
      "password": "hashPassword",
      "username": "user",
      "role": "user",
      "id": 2
    }
  ]
}
```

/alumnos - List of alumnos

```json
{
"alumnos": [
    {
      "name": "Juan",
      "lastName": "Perez",
      "age": "22",
      "email": "juan@example.com",
      "id": 1
    },
    {
      "id": 2,
      "name": "Pedro",
      "lastName": "Ramaldo",
      "age": 21,
      "email": "pedro@example.com"
    },
    {
      "id": 3,
      "name": "Maria",
      "lastName": "Lopez",
      "age": 22,
      "email": "maria@example.com"
    },
    ...
  ]
}
```
/cursos - List of cursos

```json
{
  "cursos": [
    {
      "id": 1,
      "name": "Angular",
      "description": "Curso de Angular",
      "alumnos": []
    },
    {
      "id": 2,
      "name": "React",
      "description": "Curso de React",
      "alumnos": []
    }
    ...
  ]
}
```

/inscripciones - List of inscripciones

```json
{
  {
      "id": 1,
      "curso": {
        "id": 1,
        "name": "Angular",
        "description": "Curso de Angular",
        "alumnos": []
      },
      "alumno": {
        "name": "Juan",
        "lastName": "Perez",
        "age": "21",
        "email": "juan@example.com",
        "id": 1
      }
    },
    {
      "id": 2,
      "curso": {
        "id": 4,
        "name": "JavaScript",
        "description": "Curso de JavaScript",
        "alumnos": []
      },
      "alumno": {
        "id": 10,
        "name": "Roberto",
        "lastName": "Roberts",
        "age": "26",
        "email": "roberto@example.com"
      }
    }
}
```

## Login

There are two roles an user can be: `admin` and `user`.

To login, go to `http://localhost:4200/login`. The application will ask for the email and password.

credentials:

Admin:

```json
{
  "email": "admin@example.com",
  "password": "admin"
}
```

User:

```json
{
  "email": "user@example.com",
  "password": "user",
}
```

After logging in, you will be redirected to the home page.

### Admin role

This role has access to the following endpoints:

- /usuarios
  - /list-usuarios
  - /add-usuario
  - /delete-usuario
  - /edit-usuario
  - /details-usuario
- /alumnos
  - /list-alumnos
  - /add-alumno
  - /delete-alumno
  - /edit-alumno
  - /details-alumno
- /cursos
  - /list-cursos
  - /add-curso
  - /delete-curso
  - /edit-curso
  - /details-curso 
- /inscripciones
  - /list-inscripciones
  - /add-inscripcion
  - /delete-inscripcion
  - /edit-inscripcion
  - /details-inscripcion
 

### User role

This role has access to the following endpoints:

- /alumnos
  - /list-alumnos: GET
  - /details-alumno: GET 
- /cursos
  - /list-cursos: GET
  - /details-curso: GET
- /inscripciones
  - /list-inscripciones: GET
  - /details-inscripcion: GET

## Create new user

To create a new user, go to `http://localhost:4200/main/add-usuario` logged in as an `admin`. The application will ask for all the required fields.

  - email: The email of the user.
  - password: The password of the user.
  - username: The name of the user.
  - role: The role of the user.
  
 ```json
  {
    "email": "adnmin@example.com",
    "password": "hashedPassword",
    "username": "admin",
    "role": "admin"
  }    
```

Using the pertinent service, the user will be created and its password will be hashed.

