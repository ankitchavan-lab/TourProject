# IndiaTour Backend

Spring Boot REST API for the IndiaTour project. For frontend setup, see the [frontend README](../../indiatour-react-master/indiatour-react-master/README.md).

## Requirements

- Java 8 or newer
- MySQL 8

The included Maven wrapper downloads and uses Maven as needed, so a separate Maven installation is not required.

## Database Setup

1. Start MySQL and create a database named `etour`.
2. Import the SQL scripts from `Mysqldatabase/` into the `etour` database using a MySQL client such as MySQL Workbench.
3. Create `src/main/resources/application.properties` for your local settings. This file is ignored by Git; do not commit credentials.

At minimum, configure the database connection with your own MySQL username and password:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/etour?useSSL=false
spring.datasource.username=YOUR_MYSQL_USERNAME
spring.datasource.password=YOUR_MYSQL_PASSWORD
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
```

If you use email features, also configure the `spring.mail.*` properties with an SMTP account and an app-specific password. Set `bezkoder.app.jwtSecret` to a private, sufficiently long random value. Do not publish these values.

## Run the Backend

From this directory, run:

```powershell
.\mvnw.cmd spring-boot:run
```

The API starts on `http://localhost:8080`, which is the address currently used by the frontend.

## Tests

```powershell
.\mvnw.cmd test
```
