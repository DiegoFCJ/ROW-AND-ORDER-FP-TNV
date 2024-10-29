# ROW AND ORDER

## Description
ROW AND ORDER is the final project of the TNV Academy course. This web mini-game is designed to provide an interactive experience to users, allowing them to perform login and registration, view user rankings, and leave comments on movies present in the game. The gameplay consists of reordering movies based on random parameters provided at the start of the game.

## Technologies Used
- **Frontend**: Angular
- **Backend**: 
  - Node.js
  - Spring Boot
  - .NET

## Prerequisites
Make sure you have the following tools installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Java JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) (for Spring Boot)
- [.NET SDK](https://dotnet.microsoft.com/download/dotnet) (for .NET backend)
- [Angular CLI](https://angular.io/cli) (installable via npm)

## Installation

### Frontend (Angular)
1. Navigate to the `angular-frontend` directory.
2. Install dependencies with the command:
   ```bash
   npm install
   ```
### Backend (Node.js)
1. Navigate to the `node-backend` directory.
2. Install dependencies with the command:
    ```bash
    npm install
    ```
### Backend (Spring Boot)
1. Navigate to the `springboot-backend` directory.
2. Make sure you have Maven installed. Run the command:
    ```bash
    mvn install
    ```

### Backend (.NET)
1. Navigate to the `dotnet-backend` directory.
2. Run the command to restore dependencies and start the project:
    ```bash
    dotnet restore
    dotnet run
    ```

## Dependencies by Module

### Frontend - Angular

Application name: `tnvlezioni`

#### Angular Version: `14.2.0`

#### Main Dependencies
- **@angular/animations**: `^14.2.0`
- **@angular/cdk**: `^13.0.0`
- **@angular/common**: `^14.2.0`
- **@angular/compiler**: `^14.2.0`
- **@angular/core**: `^14.2.0`
- **@angular/forms**: `^14.2.0`
- **@angular/material**: `^13.0.0`
- **@angular/platform-browser**: `^14.2.0`
- **@angular/platform-browser-dynamic**: `^14.2.0`
- **@angular/router**: `^14.2.0`
- **@ng-bootstrap/ng-bootstrap**: `^13.1.1`
- **@popperjs/core**: `^2.10.2`
- **bootstrap**: `^5.2.0`
- **rxjs**: `~7.5.0`
- **tslib**: `^2.3.0`
- **vanilla-tilt**: `^1.8.0`
- **zone.js**: `~0.11.4`

#### Useful Angular Commands
- **Start**: `ng serve`
- **Build**: `ng build`
- **Test**: `ng test`

### Backend - Node.js

Application name: `backend`

#### Main Dependencies
- **express**: `^4.18.1`
- **cors**: `^2.8.5`
- **mysql2**: `^2.3.3`
- **sequelize**: `^6.21.0`

#### DevDependencies
- **sequelize-cli**: `^6.4.1`

#### Useful Node.js Commands
- **Start**: `node src/index.js`
- **Test**: You can add custom commands in `package.json`.

### Backend - Spring Boot

#### Spring Boot Version: `3.0.0`
#### Java Version: `19`

#### Main Dependencies
- **spring-boot-starter-thymeleaf**: for HTML template rendering.
- **spring-boot-starter-data-jpa**: for JPA integration and database management.
- **spring-boot-starter-mail**: for mail sending functionality.
- **spring-boot-starter-security**: for authentication and authorization.
- **spring-boot-starter-web**: for creating REST APIs.
- **lombok**: to reduce code boilerplate (requires `annotationProcessor`).
- **mysql-connector-j**: driver for MySQL database connection.

#### Test Dependencies
- **spring-boot-starter-test**: for test execution
- **spring-security-test**: for testing security features.

#### Useful Spring Boot Commands
- **Start**: `mvn spring-boot:run`
- **Test**: `mvn test`

### Backend - .NET

#### Target .NET Version: `6.0` and `7.0`

#### Main Dependencies
- **Microsoft.EntityFrameworkCore**: `6.0.11` for Microsoft's ORM.
- **Microsoft.EntityFrameworkCore.Design**: `6.0.11` for Entity Framework design tools.
- **Pomelo.EntityFrameworkCore.MySql**: `6.0.2` for MySQL support.
- **Swashbuckle.AspNetCore**: `6.2.3` and `6.4.0` for automatic API documentation generation (Swagger).
- **Microsoft.AspNet.WebApi.Cors**: `5.2.9` to enable CORS in .NET APIs.

#### Test Dependencies
- **Microsoft.NET.Test.Sdk**: `17.3.2` for test execution.
- **xunit**: `2.4.2` and **xunit.runner.visualstudio**: `2.4.5` for test framework and runner.
- **coverlet.collector**: `3.1.2` for code coverage data collection.

#### Useful .NET Commands
- **Package restore**: `dotnet restore`
- **Application start**: `dotnet run`
- **Run tests**: `dotnet test`

## Project Structure

    /project-root
    ├── angular-frontend/              # Angular Application
    ├── node-backend/                  # Node.js Application
    ├── springboot-backend/            # Spring Boot Application
    ├── dotnet-backend/                # .NET Application
    ├── README.md                      # Project Documentation
    └── .gitignore                     # Git Exclusion File
    
## Running the Project
### Starting the Frontend
1. Navigate to the angular-frontend directory.
2. Start the development server with:
    ```bash
    ng serve
    ```
3. Open your browser and go to http://localhost:4200.

### Starting the Backend
1. Node.js Backend:
    - Navigate to the node-backend directory and start the server with:
        ```bash
        node src/index.js
        ```
2. Spring Boot Backend:
    - Navigate to the springboot-backend directory and run the command:
        ```bash
        mvn spring-boot:run
        ```

3. .NET Backend:
    - Navigate to the dotnet-backend directory and run the command:
        ```bash
        dotnet run
        ```

## Testing
Tests can be run for each part of the project following the specific instructions:
- Angular: Use the ng test command in the angular-frontend directory.
- Node.js: Add test scripts in package.json and use npm test.
- Spring Boot: Run tests with mvn test.
- .NET: Use the dotnet test command.