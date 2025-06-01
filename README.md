# Gestió de reserves de les pistes del poliesportiu

Aquest projecte consisteix en el disseny i implementació d'una **pàgina web per a la gestió de reserves** de les pistes d'un poliesportiu municipal [1]. L'objectiu principal és modernitzar i optimitzar el sistema de reserves, actualment basat en mètodes tradicionals i poc eficients, especialment davant l'augment de la demanda d'esports com el pàdel [3-5].

## Context Educatiu

El projecte es desenvolupa en el marc del mòdul **"0615 - Disseny d'interfícies WEB"** [1, 2] del **Cicle Formatiu de Grau Superior en Desenvolupament d'Aplicacions Web** [2], impartit a l'**IES Jaume II el Just** de Tavernes de la Valldigna [6, 7]. El mòdul té una duració de **120 hores** [2].

La realització d'aquest projecte permet a l'alumnat posar en pràctica de manera integrada i significativa molts dels continguts clau del mòdul [8, 9], com la planificació d'interfícies gràfiques, la implementació de la usabilitat i el disseny amigable, el disseny de webs accessibles, l'ús d'estils i ferramentes software [8, 10, 11]. Busca anar més enllà de la teoria per desenvolupar habilitats essencials per al perfil professional [9].

## Objectius del Projecte

Els objectius principals d'aquest projecte són [12, 13], alineats amb els objectius del mòdul [2, 14-16]:

*   Permetre a **qualsevol usuari completar el procés de reserva** de les diferents instal·lacions esportives disponibles al poliesportiu municipal [12].
*   Concebre, dissenyar i desenvolupar una interfície web funcional i atractiva per a la reserva de pistes esportives, demostrant una comprensió dels principis de disseny d'interfícies web, la **usabilitat** i l'**accessibilitat** [12].
*   Ser **adaptable a qualsevol dispositiu** i amb un disseny **responsivu** [13].
*   Servir com a instrument d'avaluació integral de les competències assolides en el mòdul [13].
*   Fomentar la planificació i l'organització del treball, el bon ús dels recursos disponibles i la capacitat de resoldre problemes de manera autònoma [13].
*   Integrar i aplicar els coneixements del mòdul en un context pràctic i real, similar a un encàrrec professional [13].

## Tecnologies Utilitzades

El projecte utilitza una arquitectura **desacoblada** amb un frontend i un backend separats [17]. L'entorn de desenvolupament es gestiona mitjançant **Docker i Docker Compose** [18, 19].

*   **Frontend:** Angular (SPA), HTML, CSS, JavaScript [17, 19]. Requereix **Node.js i npm** per a l'execució local [20].
*   **Backend:** Laravel (API), PHP, Apache [17, 19]. El backend actua com a intermediari entre el client i la base de dades, gestionant la lògica de negoci [21].
*   **Base de Dades:** MySQL [17, 19].
*   **Contenidors i Orquestració:** Docker, Docker Compose, YAML [18, 19].
*   **Control de Versions:** Git [19, 22].
*   **Ferramentes Addicionals:** Bootstrap (per a estil) [11, 18], diagrams.net / app i Figma (per a disseny i prototipat) [18, 19, 23-25], Scrum (per a metodologia de gestió) [18, 23].

## Metodologia

El projecte segueix una metodologia d'**Aprenentatge Basat en Projectes i Aprenentatge Basat en Serveis** [26]. Es realitza de forma **pràctica** en grups [26] i s'utilitza la metodologia **Scrum** per a la gestió del projecte [18, 23].

El desenvolupament del front-end es basa en un enfocament **"mobile-first"**, prioritzant l'experiència en dispositius mòbils [10, 23, 27]. El procés inclou la creació de **prototips** de baixa resolució (en paper) i alta resolució (amb ferramentes digitals) per definir l'aspecte visual [23, 28].

El professor proporciona un **projecte d'exemple** inicial [23] que inclou el frontend amb Angular, el servidor (backend) i la base de dades mitjançant un fitxer `docker-compose.yml` [19, 23]. Els alumnes, treballant en grups, han de modificar i adaptar aquesta base per desenvolupar el projecte [29].

La comunicació entre el frontend (Angular) i el backend (Laravel API) es realitza mitjançant **peticions asíncrones** que retornen dades en format **JSON** [17, 30]. Això permet una actualització fluida de l'aplicació sense recarregar la pàgina [31].

## Continguts del Mòdul Aplicats en el Projecte

El desenvolupament d'aquest projecte abasta i integra els coneixements adquirits en els diferents blocs temàtics del mòdul "Disseny d'Interfícies Web" [8, 9], d'acord amb la planificació [32]:

*   **Anàlisi i planificació** (definició del projecte, usuaris, anàlisi d'aplicacions similars, DAFO) [32-36].
*   **Disseny visual i conceptual** (guia d'estils, colors, tipografia, icones, usabilitat UI/UX, prototipatge, diagrames de flux) [28, 36-41].
*   **Estructura del contingut amb HTML** (estructura bàsica, elements semàntics, llistes, taules, formularis, validació, accessibilitat bàsica) [24, 41-46].
*   **Estils i maquetació amb CSS** (model de caixa, Flexbox, Grid, disseny responsiu amb Media Queries, aplicació de la guia d'estils, accessibilitat amb CSS) [27, 47-55].
*   **Contingut multimèdia** (tipus, formats, optimització, accessibilitat d'imatges) [55-57].
*   **Interactivitat** (elements interactius, resposta a esdeveniments, manipulació del DOM, fluxos d'interacció, validació de formularis) [25, 57-65].
*   **Propietat intel·lectual** (drets d'autor, llicències) [65-68].
*   **Documentació i memòria del projecte** [68, 69].

## Estructura del Repositori

El repositori s'organitza de la següent manera:

*   `api/`: Conté el codi font del backend basat en el framework Laravel.
*   `frontend/`: Conté el codi font del frontend basat en el framework Angular.
*   `docker-compose.yml`: Fitxer de configuració principal per a definir i gestionar els serveis (backend, base de dades) amb Docker Compose [19, 70].
*   Altres fitxers de configuració d'entorn i `.git*` per a la gestió de versions.

## Instruccions d'Instal·lació Local

Per posar en marxa el projecte en un entorn de desenvolupament local, seguiu aquests passos, basats en les instruccions proporcionades [20, 71, 72]:

1.  **Clonar el Repositori Git:**
    Obriu un terminal i executeu la següent comanda:

    ```bash
    git clone https://github.com/frafusju/polideportivo
    ```
    Dirigiu-vos al directori del projecte clonat.

2.  **Configurar i Iniciar l'Entorn del Servidor (Docker Compose):**
    Assegureu-vos de tenir Docker i Docker Compose instal·lats. Des del directori arrel del projecte (on es troba `docker-compose.yml`), executeu:

    *   **Construir les imatges dels serveis:** [72]
        ```bash
        docker-compose build
        ```
    *   **Aixecar els serveis en segon pla:** [72]
        ```bash
        docker-compose up -d
        ```
    *   **Netejar la configuració de la caché de Laravel:** [72]
        ```bash
        docker-compose exec laravel php artisan config:clear
        ```
    *   **Executar les migracions de la base de dades:** [72]
        ```bash
        docker exec -it laravel-app php artisan migrate
        ```
    *   **Executar els seeders de la base de dades:** [72]
        ```bash
        docker exec -it laravel-app php artisan db:seed
        ```

3.  **Configurar i Executar el Client (Frontend Angular):**
    Assegureu-vos de tenir Node.js i npm instal·lats [20]. Des del directori del frontend:
    ```bash
    cd frontend/ # o la ruta_frontend/ específica
    ```
    Instal·leu les dependències: [71]
    ```bash
    npm install
    ```
    Inicieu el servidor de desenvolupament: [71]
    ```bash
    ng serve
    ```
    El frontend estarà disponible a **`http://localhost:4200`** [71].

## Comandes Útils de Docker Compose

*   **Mostrar els logs dels serveis:** [72]
    ```bash
    docker-compose logs -f
    ```
*   **Parar els serveis i eliminar contenidors, xarxes i volums:** [72]
    ```bash
    docker-compose down -v
    ```

## Avaluació

L'avaluació del projecte serà contínua, tenint en compte la participació, exercicis, pràctiques i progrés [71]. L'avaluació final se centrarà en la qualitat, funcionalitat, usabilitat i accessibilitat del frontend, així com en la documentació i presentació del projecte [22].

## Autors

*   Joan Sanchis Monzó [1]
*   Francisco Fuster Just [1]