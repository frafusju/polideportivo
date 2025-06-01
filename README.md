# Projecte: Gestió de reserves de les pistes del poliesportiu mitjançant una pàgina Web

**Mòdul:** 0615 - Disseny d'interfícies WEB
**Cicle:** Tècnic Superior en Desenvolupament d'Aplicacions Web
**Centre:** IES Jaume II el Just, Tavernes de la Valldigna
**Alumnes:** Joan Sanchis Monzó, Francisco Fuster Just

## Descripció del Projecte

Aquest projecte consisteix en el disseny i desenvolupament de la **capa de presentació (front-end)** per a una aplicació web de gestió de reserves de les instal·lacions d'un poliesportiu municipal. El projecte aborda la necessitat de modernitzar el sistema de reserves actual, que depèn de mètodes tradicionals ineficients.

Desenvolupat en el context educatiu del mòdul "Disseny d'interfícies WEB", el projecte busca integrar i aplicar coneixements de disseny d'interfícies, usabilitat, accessibilitat i tecnologies web estàndard.

## Objectius

Els principals objectius del projecte són:

*   Permetre als usuaris realitzar el procés complet de **reserva d'instal·lacions esportives** a través d'una plataforma web.
*   Dissenyar i desenvolupar una interfície web **funcional, atractiva, usable i accessible**, adaptada a qualsevol dispositiu (amb **disseny responsiu** i enfocament "mobile-first").
*   Servir com a **instrument d'avaluació** integral de les competències adquirides en el mòdul.
*   Fomentar la **planificació, l'organització, la resolució de problemes** i l'aplicació de coneixements en un context pràctic i real.

## Metodologia

El projecte segueix una **metodologia eminentment pràctica** basada en l'Aprenentatge Basat en Projectes i l'Aprenentatge Basat en Serveis. El desenvolupament es realitza progressivament en grups, combinant explicacions teòriques amb activitats de disseny, maquetació i programació.

S'utilitza la **metodologia Scrum** per a la gestió del projecte. L'enfocament de disseny prioritza els **dispositius mòbils ("mobile-first")** i s'inicia amb la creació de prototips de baixa i alta resolució (wireframes) abans de la fase d'implementació.

## Arquitectura

L'arquitectura de l'aplicació està dividida en dos components principals: **Frontend (Client)** i **Backend (Servidor)**.

*   **Frontend:** Es basa en una **Single Page Application (SPA)** utilitzant el framework **Angular**. Angular s'encarrega de generar i gestionar les vistes, interactuant amb el backend mitjançant peticions asíncrones.
*   **Backend:** Consisteix en una **API** desenvolupada amb el framework **Laravel** (PHP). El backend gestiona la lògica de negoci, es comunica amb la base de dades i serveix les dades al frontend en format **JSON**.
*   **Base de Dades:** S'utilitza **MySQL** per a la persistència de les dades.
*   **Orquestració:** S'utilitza **Docker** i **Docker-Compose** per a la gestió i l'entorn de desenvolupament dels diferents serveis (frontend, backend, base de dades).

Aquesta arquitectura desacoblada permet que client i servidor executin les seves tasques de manera independent, millorant la fluïdesa i la rapidesa de l'aplicació.

## Estructura del Repositori

El repositori està organitzat per facilitar la gestió del projecte educatiu:

*   `README.md`: Aquest fitxer, amb una introducció breu, els objectius i l'explicació de l'estructura del repositori.
*   `professorat/`: Conté la documentació adreçada al professorat (programació, materials, temporalització, avaluació).
*   `alumnat/`: Inclou el dossier del projecte per a l'alumnat, recursos, guies i activitats.
*   `api/`: Conté el codi font del backend (API Laravel).
*   `frontend/`: Conté el codi font del frontend (aplicació Angular).
*   `docker-compose.yml`: Fitxer de configuració per orquestrar els contenidors Docker.
*   Altres fitxers de configuració i recursos del projecte.

## Instal·lació i Execució

Per posar en marxa l'aplicació en un entorn de desenvolupament local, cal tenir **Docker i Docker Compose** instal·lats.

1.  **Clonar el repositori:**
    ```bash
    git clone https://github.com/frafusju/polideportivo.git
    cd polideportivo # O el nom del directori clonat
    ```
2.  **Construir i aixecar els serveis (Backend, BD):** Utilitzant `docker-compose`.
    ```bash
    docker-compose build
    docker-compose up -d
    ```
3.  **Configurar el Backend (Laravel) dins del contenidor Docker:**
    ```bash
    docker-compose exec laravel php artisan config:clear
    docker-compose exec laravel php artisan migrate
    docker-compose exec laravel php artisan db:seed
    ```
    *(Això assumeix que el servei de Laravel es diu 'laravel' al `docker-compose.yml`. Ajusteu si cal)*.
4.  **Configurar i executar el Frontend (Angular):** Cal tenir **Node.js i npm** instal·lats localment.
    ```bash
    cd frontend # O el directori del frontend si és diferent
    npm install
    ng serve
    ```
    *(Això iniciarà el servidor de desenvolupament d'Angular, normalment accessible a `localhost:4200`)*.

## Tecnologies Utilitzades

*   **Frontend:** HTML, CSS, JavaScript, Angular, RxJS
*   **Backend:** PHP, Laravel
*   **Base de Dades:** MySQL
*   **Altres:** Docker, Docker-Compose, Git, GitHub, JSON, YAML

## Ferramentes de Disseny i Desenvolupament

*   Diagrams.net
*   Figma
*   Gimp (per edició d'imatges)
*   Visual Studio Code (IDE)
*   Ferramentes de desenvolupador del navegador
*   Ferramentes de validació (WAVE per Accessibilitat)

## Avaluació

L'avaluació del projecte és **contínua**. Es valora la participació, les pràctiques parcials, i el progrés en el desenvolupament. L'avaluació final se centra en la **qualitat, funcionalitat, usabilitat i accessibilitat** del front-end, així com en la documentació i la presentació.
