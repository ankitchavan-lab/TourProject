# IndiaTour

IndiaTour is a college project for discovering and booking tour packages. The web app combines a React frontend with a Spring Boot REST API and a MySQL database.

## Features

- Browse tour sectors and search tour packages
- View package itineraries and costs
- Register and sign in as a customer
- Create bookings and manage passenger details
- View customer profile and booking information
- Provide administrative tour management screens

## Technology Stack

- Frontend: React, React Router, Bootstrap
- Backend: Java, Spring Boot, Spring Security, Spring Data JPA
- Database: MySQL

## Project Layout

```text
TourProject/
|-- indiatour-react-master/
|   `-- indiatour-react-master/    React application
|-- indiatourjava-master/
|   `-- indiatourjava-master/     Spring Boot application and SQL scripts
`-- .gitignore
```

## Setup Guides

- [Frontend setup](indiatour-react-master/indiatour-react-master/README.md)
- [Backend and database setup](indiatourjava-master/indiatourjava-master/README.md)

Run the backend and configure its MySQL database before using frontend features that call the API. The frontend currently expects the API at `http://localhost:8080`.

## Security Note

Keep database passwords, mail credentials, and JWT secrets in local configuration only. Do not commit credentials or other secrets to GitHub. See the backend setup guide for local configuration instructions.
