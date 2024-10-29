# ROW AND ORDER

## Descrizione
ROW AND ORDER è il progetto finale del corso TNV Academy. Questo mini gioco web è progettato per offrire un'esperienza interattiva agli utenti, permettendo loro di eseguire login e registrazione, visualizzare un ranking degli utenti, e lasciare commenti sui film presenti nel gioco. Il gameplay consiste nel riordinare i film in base a parametri randomici forniti all'inizio del gioco.

## Tecnologie Utilizzate
- **Frontend**: Angular
- **Backend**: 
  - Node.js
  - Spring Boot
  - .NET

## Prerequisiti
Assicurati di avere i seguenti strumenti installati:
- [Node.js](https://nodejs.org/) (versione LTS consigliata)
- [Java JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) (per Spring Boot)
- [.NET SDK](https://dotnet.microsoft.com/download/dotnet) (per il backend .NET)
- [Angular CLI](https://angular.io/cli) (installabile tramite npm)

## Installazione

### Frontend (Angular)
1. Naviga nella directory `angular-frontend`.
2. Installa le dipendenze con il comando:
   ```bash
   npm install
   ```
### Backend (Node.js)
1. Naviga nella directory node-backend.
2. Installa le dipendenze con il comando:
    ```bash
    npm install
    ```
### Backend (Spring Boot)
1. Naviga nella directory springboot-backend.
2. Assicurati di avere Maven installato. Esegui il comando:
    ```bash
    mvn install
    ```

### Backend (.NET)
1. Naviga nella directory dotnet-backend.
2. Esegui il comando per ripristinare le dipendenze e avviare il progetto:
    ```bash
    dotnet restore
    dotnet run
    ```

## Dipendenze per Modulo

### Frontend - Angular

Nome applicazione: `tnvlezioni`

#### Versione di Angular: `14.2.0`

#### Dipendenze principali
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

#### Comandi utili per Angular
- **Avvio**: `ng serve`
- **Build**: `ng build`
- **Test**: `ng test`

### Backend - Node.js

Nome applicazione: `backend`

#### Dipendenze principali
- **express**: `^4.18.1`
- **cors**: `^2.8.5`
- **mysql2**: `^2.3.3`
- **sequelize**: `^6.21.0`

#### DevDependencies
- **sequelize-cli**: `^6.4.1`

#### Comandi utili per Node.js
- **Avvio**: `node src/index.js`
- **Test**: Puoi aggiungere comandi personalizzati nel `package.json`.

### Backend - Spring Boot

#### Versione di Spring Boot: `3.0.0`
#### Versione di Java: `19`

#### Dipendenze principali
- **spring-boot-starter-thymeleaf**: per il rendering di template HTML.
- **spring-boot-starter-data-jpa**: per l'integrazione con JPA e gestione database.
- **spring-boot-starter-mail**: per le funzionalità di invio mail.
- **spring-boot-starter-security**: per autenticazione e autorizzazione.
- **spring-boot-starter-web**: per creare REST API.
- **lombok**: per ridurre il boilerplate di codice (richiede `annotationProcessor`).
- **mysql-connector-j**: driver per la connessione con database MySQL.

#### Dipendenze per i Test
- **spring-boot-starter-test**: `per esecuzione di test`
- **spring-security-test**: per il test di funzionalità di sicurezza.

#### Comandi utili per Spring Boot
- **Avvio**: `mvn spring-boot:run`
- **Test**: `mvn test`

### Backend - .NET

#### Versione Target .NET: `6.0` e `7.0`

#### Dipendenze principali
- **Microsoft.EntityFrameworkCore**: `6.0.11` per l'ORM di Microsoft.
- **Microsoft.EntityFrameworkCore.Design**: `6.0.11` per strumenti di design di Entity Framework.
- **Pomelo.EntityFrameworkCore.MySql**: `6.0.2` per il supporto a MySQL.
- **Swashbuckle.AspNetCore**: `6.2.3` e `6.4.0` per la generazione automatica di documentazione API (Swagger).
- **Microsoft.AspNet.WebApi.Cors**: `5.2.9` per abilitare CORS in API .NET.

#### Dipendenze per i Test
- **Microsoft.NET.Test.Sdk**: `17.3.2` per esecuzione dei test.
- **xunit**: `2.4.2` e **xunit.runner.visualstudio**: `2.4.5` per framework e runner di test.
- **coverlet.collector**: `3.1.2` per la raccolta dei dati di copertura del codice.

#### Comandi utili per .NET
- **Ripristino pacchetti**: `dotnet restore`
- **Avvio dell'applicazione**: `dotnet run`
- **Esecuzione test**: `dotnet test`


## Struttura del Progetto

    /project-root
    ├── angular-frontend/              # Applicazione Angular
    ├── node-backend/                  # Applicazione Node.js
    ├── springboot-backend/            # Applicazione Spring Boot
    ├── dotnet-backend/                # Applicazione .NET
    ├── README.md                      # Documentazione del progetto
    └── .gitignore                     # File di esclusione per Git
    
## Esecuzione del Progetto
### Avvio del Frontend
1. Naviga nella directory angular-frontend.
2. Avvia il server di sviluppo con:
    ```bash
    ng serve
    ```
3. Apri il browser e vai su http://localhost:4200.

### Avvio del Backend
1. Backend Node.js:
    - Naviga nella directory node-backend e avvia il server con:
        ```bash
        node src/index.js
        ```
2. Backend Spring Boot:
    - Naviga nella directory springboot-backend e avvia il comando:
        ```bash
        mvn spring-boot:run
        ```

3. Backend .NET:
    - Naviga nella directory dotnet-backend e avvia il comando:
        ```bash
        dotnet run
        ```

## Test
I test possono essere eseguiti per ogni parte del progetto seguendo le istruzioni specifiche:
- Angular: Usa il comando ng test nella directory angular-frontend.
- Node.js: Aggiungi script di test nel package.json e utilizza npm test.
- Spring Boot: Esegui i test con mvn test.
- .NET: Usa il comando dotnet test.
