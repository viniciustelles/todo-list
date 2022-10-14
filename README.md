# REST API with Spring Boot and Angular

Example project demonstrating the use of Spring-boot and Angular to buid a todo-list application.

## 💻 Tecnologies

- Java 11
- Spring Boot 3
- JPA + Hibernate
- JUnit 5 + Mockito (back-end tests)
- Maven
- Angular v14
- Angular Material

## ⌨️ Editor / IDE

- Frontend - Visual Studio Code
- Backend - IntelliJ IDEA

## Some functionalies available in the API

- [ ] Java model class with validation
- [ ] JPA repository
- [ ] JPA Pagination
- [ ] Controller, Service and Repository layers
- [ ] Swagger
- [ ] Hibernate / Jakarta Validation
- [ ] Unit tests for all layers (repository, service, controller)

## Some functionalies available in the Front-end

- [ ] Angular Material components
- [ ] List of all tasks
- [ ] Form to update/create task
- [ ] View only screen
- [ ] TypedForms (Angular v14+)
- [ ] Presentational x Smart Components

## ❗️Excuting the code locally

### Executing the back-end

You need to have Java and Maven installed and configured locally.

Open the `backend` project in your favorite IDE as a Maven project and execute it as Spring Boot application.

### Executing the front-end

You need to have Node.js / NPM installed locally.

1) Install all the required depencencies:

```
npm install
```

2) Execute the project:

```
npm run start
```

This command will run the Angular project with a proxy to the Java server, without requiring CORS.

Open your browser and access **http://localhost:4200** (Angular default port).