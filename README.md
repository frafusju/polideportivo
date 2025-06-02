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

### Instruccions d'Instal·lació

Seguiu aquests passos des d'un terminal:

1.  **Obtindre el codi del projecte**:
    Per començar, cal obtenir el codi font complet des del repositori Git on està allotjat. Aquest projecte es troba disponible en un repositori públic a GitHub a l'adreça `https://github.com/frafusju/polideportivo.git`.

    Per descarregar el projecte, cal tindre Git instal·lat a la vostra màquina local. Una vegada instal·lat Git, obriu un terminal o línia d'ordres i executeu la següent comanda:

    ```bash
    git clone https://github.com/frafusju/polideportivo.git
    ```

    Aquesta comanda crearà una carpeta anomenada `polideportivo` que contindrà tots els fitxers del projecte, incloent-hi el fitxer `docker-compose.yml` necessari per als passos següents.

2.  **Dirigiu-vos al directori del projecte**:

    ```bash
    cd polideportivo
    ```

    Una vegada hageu clonat el repositori, dirigiu-vos al directori principal del projecte (on es troba la carpeta `polideportivo` i dins d'ella el fitxer `docker-compose.yml`).

3.  **Construir les imatges Docker amb Docker Compose**:
    Des del directori arrel del projecte clonat on es troba el fitxer de configuració `docker-compose.yml`, heu d'executar la següent comanda per construir les imatges Docker necessàries per als serveis definits:

    ```bash
    docker-compose build
    ```

    Aquesta comanda llegeix el fitxer `docker-compose.yml` i els Dockerfiles associats a cada servei (si n'hi ha), i crea o actualitza les imatges Docker per a cadascun d'aquests serveis al vostre sistema local. Això és important per assegurar que els contenidors que s'iniciaran posteriorment es basen en les imatges més actualitzades segons la configuració del projecte.

4.  **Posar en marxa l'entorn amb Docker Compose**:
    Un cop les imatges han estat construïdes amb èxit, heu d'executar la següent comanda des del mateix directori arrel del projecte per aixecar (iniciar) tots els serveis definits:

    ```bash
    docker-compose up -d
    ```

    *   `docker-compose`: L'eina per gestionar aplicacions multi-contenidor.
    *   `up`: Aquesta subcomanda crea i inicia els contenidors per a cada servei definit al fitxer `docker-compose.yml`. Utilitza les imatges disponibles (les construïdes en el pas anterior). També crea les xarxes i volums necessaris.
    *   `-d`: Aquesta opció significa "detached mode" (mode desenganxat). Fa que els contenidors s'executen en segon pla, alliberant el terminal.

    En executar aquesta comanda, Docker Compose llig el fitxer `docker-compose.yml` i posa en marxa els contenidors per al frontend (Angular), el backend (Laravel), i la base de dades (MySQL), creant les xarxes i volums necessaris perquè puguen comunicar-se entre si.

5.  **Preparar la Base de Dades (BBDD)**:
    Un cop els contenidors estan en marxa, especialment el del backend (Laravel) i el de la base de dades (MySQL), és necessari preparar la base de dades. En un projecte Laravel, això implica alguns passos importants utilitzant l'eina de línia d'ordres de Laravel, anomenada Artisan. Aquests passos es realitzen executant comandes dins del contenidor del backend.

    El contenidor del backend (el servei `laravel` definit al `docker-compose.yml`) s'anomena `laravel-app` un cop iniciat (o similar, depenent de la configuració específica del fitxer yaml). Les comandes per a la base de dades són:

    *   Netejar la memòria cau de configuració de Laravel:

        ```bash
        docker-compose exec laravel php artisan config:clear
        ```

        Aquesta comanda esborra els fitxers de configuració emmagatzemats en memòria cau per Laravel. Això assegura que l'aplicació utilitza els fitxers de configuració actualitzats, incloent-hi els del fitxer `.env`, la qual cosa pot ser crucial per al correcte funcionament de les migracions i seeders.

    *   Executar les Migracions (Creació de l'estructura de la BBDD):

        ```bash
        docker exec -it laravel-app php artisan migrate
        ```

        Aquesta comanda executa el procés de migració dins del contenidor de Laravel, creant així totes les taules necessàries a la base de dades MySQL segons la definició del projecte.

    *   Executar els Seeders (Omplir la BBDD amb dades inicials):

        ```bash
        docker exec -it laravel-app php artisan db:seed
        ```

        Aquesta comanda executa els seeders dins del contenidor de Laravel, omplint la base de dades amb les dades inicials necessàries (com usuaris de prova, tipus d'instal·lacions d'exemple, etc.).

Seguint aquestes instruccions, podreu obtenir el codi del projecte, construir les imatges Docker necessàries, posar en marxa l'entorn complet contenidoritzat i inicialitzar la base de dades amb l'estructura i les dades necessàries per al correcte funcionament de l'aplicació. L'aplicació hauria de ser accessible mitjançant el vostre navegador (consulteu la configuració de ports al fitxer `docker-compose.yml` si és necessari, sovint el frontend és accessible a `http://localhost`).

## Comandes Útils de Docker Compose

Aquí teniu algunes comandes addicionals que poden ser útils durant el desenvolupament:

*   **Mostrar els logs dels contenidors** (útil per a depuració):

    ```bash
    docker-compose logs -f
    ```

    Mostra la sortida (logs) de tots els contenidors del vostre projecte en temps real. Molt útil per depurar i veure si hi ha errors.

*   **Aturar i eliminar els serveis i els seus volums associats**:

    ```bash
    docker-compose down -v
    ```

    Atura i elimina tots els contenidors, les xarxes per defecte, i els volums de dades (`-v`) creats per `docker-compose up`. L'opció `-v` elimina els volums, cosa que esborraria les dades de la base de dades si no teniu un volum extern configurat.


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

## Autors

*   Joan Sanchis Monzó
*   Francisco Fuster Just

