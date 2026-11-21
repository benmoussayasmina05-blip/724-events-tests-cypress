# 724 Events

## Description
L'application est le site d'une agence evenementielle.
## Pre-requis
- NodeJS  >= v16.14.1

## Installation
- `yarn install`

## Lancement de l'application
- `yarn start`

## Tests
- `yarn test`

## Tests automatisés avec Cypress

Les tests automatisés du projet 724 Events sont réalisés avec Cypress.

### Organisation des tests

Les scripts se trouvent dans `FrontEnd/cypress/e2e/` :

- `API/` : tests des API Contact et Inscription.
- `UI/` : tests des formulaires, événements, filtres et navigation.

Le projet contient 18 fichiers de tests Cypress.

### Prérequis

- Node.js et les dépendances du projet installées.
- Application Frontend accessible sur http://localhost:3000
- API Backend accessible sur http://localhost:8080

### Lancer Cypress en mode graphique

Depuis le dossier `FrontEnd`, exécuter :

```powershell
npm.cmd exec -- cypress open
```

Sélectionner E2E Testing, puis Chrome et le script souhaité.

### Exécuter tous les tests

```powershell
npm.cmd exec -- cypress run --browser electron
```

### Exécuter uniquement les tests API

```powershell
npm.cmd exec -- cypress run --spec "cypress/e2e/API/*.cy.js"
```

### Exécuter uniquement les tests UI

```powershell
npm.cmd exec -- cypress run --spec "cypress/e2e/UI/*.cy.js"
```

### Résultats

Certains tests peuvent échouer lorsqu'ils détectent des anomalies connues de l'application. Les résultats doivent être analysés en comparant le comportement observé au résultat attendu.

### Génération d'un rapport de tests Cypress

Depuis le dossier `FrontEnd`, avec le backend démarré :

```powershell
npm.cmd exec -- cypress run --spec "cypress/e2e/API/inscription-api.cy.js" --reporter junit --reporter-options "mochaFile=cypress/reports/inscription-api.xml"
```
Cette commande exécute les tests API d'inscription et génère un rapport JUnit XML dans le dossier `cypress/reports/`.

Le rapport indique les tests exécutés, les réussites, les échecs et les messages d'erreur.

