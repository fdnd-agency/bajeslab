# Bajeslab

[Livelink](https://bajeslab.netlify.app/)

**Design challenge: Ontwerp en ontwikkel een webapplicatie die de veelzijdigheid en het innovatieve karakter van het Healthy Urban Living Lab Bajeskwartier (HULL) weerspiegelt.**

<img width="226" height="355" alt="image" src="https://github.com/user-attachments/assets/826a262d-2093-42e6-a115-b87d00120350" />
<img width="522" height="355" alt="image" src="https://github.com/user-attachments/assets/8413f48f-bbdc-4710-9fc3-b38a5df60324" />

## Beschrijving
Opdrachtgever: Healthy Urban Living Lab Bajeskwartier

Het Bajeskwartier wordt een inspirerende buurt binnen de ring van Amsterdam. Om te wonen, ondernemen, leren, maken en recreëren. Ooit was de Bijlmerbajes een plek waar je liever niet kwam, de plek waar zes gevangenistorens stonden. Nu ontstaat hier een woonwijk met ongeveer 1400 woningen.

Gebiedsontwikkelaar AM, de Hogeschool van Amsterdam en diverse praktijkpartners werken sinds 2018 samen in het Healthy Urban Living Lab Bajeskwartier aan de ambitie om een groene, gezonde en inclusieve buurt te realiseren. Als Living Lab werken we samen met studenten, onderzoekers, bewoners en praktijkpartners.

## Design
Het ontwerp van Bajeslab is gemaakt in Figma en weerspiegelt het innovatieve en veelzijdige karakter van het Healthy Urban Living Lab Bajeskwartier (HULL).

Je kunt het volledige ontwerp hier bekijken: [Figma Design](https://www.figma.com/design/doguH52moO2cyA3pT0B6sd/Living-Lab-Bajeskwartier-2025-2026?node-id=3-120&p=f&t=cDUMQyYOKp0r8CXw-0)

## Features
- **Projectoverzicht:** Interactieve weergave van alle lopende en afgeronde projecten binnen het HULL
- **Netwerkoverzicht:** Informatie over betrokken organisaties
- **Responsive Design:** Optimaal bruikbaar op desktop, tablet en mobiel
- **CMS Integratie:** Content beheer via Directus voor eenvoudige updates
- **Toegankelijkheid:** Ontworpen met aandacht voor toegankelijkheid en gebruiksvriendelijkheid
- **Storybook:** Component library voor ontwikkeling van herbruikbare UI componenten
- **SEO & Geo-geoptimaliseerd:** Volledige zoekmachineoptimalisatie met lokalisatiemogelijkheden

## Paginaoverzicht
- **Home:** Introductie tot Bajeslab met een kort "Over ons" blok, samenvatting van themalijnen, 3 uitgelichte projecten en nieuwsbriefaanmelding.
- **Over ons:** Volledige weergave van de organisatie, het team en alle themalijnen met uitgebreide informatie.
- **Projecten:** Overzichtspagina met alle projecten van het HULL.
- **Projectdetail:** Detailpagina voor een individueel project met volledige beschrijving.
- **Netwerkpagina:** Overzicht van alle partners en samenwerkingsorganisaties binnen het HULL.
- **Contactpagina:** Contactpersonen en manieren om in contact te komen met het team.

## Toekomstige ontwikkelingen
Voor volgende ontwikkelteams zijn er enkele backlog items die de website verder kunnen verbeteren:
- **HeroBlock rebuild:** Het ontwerp voor een vernieuwde heroBlock sectie is al goedgekeurd door de opdrachtgever (Suus) en moet nog geïmplementeerd worden.
- **Interactive audio map:** Een interactieve kaart van het Bajeskwartier waar gebruikers kunnen klikken op verschillende locaties om audiofragmenten te horen met verhalen van bewoners, projectupdates of achtergrondinformatie over specifieke onderwerpen.
- **Kleurenpalet implementeren:** De kleuren uit het redesign-ontwerp omzetten naar de huidige stylesheet met CSS-variabelen.
- **Projecten filter:** De functionaliteit voor het filteren van projecten.
- **Projecten Grid Layout:** Het implementeren van het speciale grid-ontwerp.

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Framework:** Sveltekit
- **Component Library:** Storybook
- **Runtime:** Node.js
- **CMS:** Directus
- **Package Manager:** npm
- **Hosting:** Netlify

### Development Workflow

#### Git Workflow

1. **Main branch:** productieklare code, deployed naar Netlify
2. **Development branch:** Ontwikkelingswerk
3. **Feature branches:** Voor nieuwe features (feature/feature-naam)

   
```bash
# Maak een nieuwe feature branch
git checkout -b feature/nieuwe-feature

# Maak je wijzigingen
# Commit regelmatig met duidelijke messages
git add .
git commit -m "feat: beschrijving van de feature"

# Push naar remote
git push origin feature/nieuwe-feature

# Maak een Pull Request op GitHub/GitLab
```
#### Commit Conventions

We gebruiken conventional commits:

- **feat:** - Nieuwe feature
- **fix:** - Bug fix
- **docs:** - Documentatie wijzigingen
- **refactor:** - Code refactoring
- **chore:** - Onderhoudswerk, dependencies updates


#### Storybook
Storybook is een open-source tool voor het ontwikkelen van UI-componenten. Het stelt ons in staat om componenten te bouwen, testen en documenteren zonder de complexiteit van de volledige applicatie. Dit geeft ook een gestructureerd overzicht van de componenten.

De template folder bevat een complete starter kit:
- **Component Story:** Basis Svelte component met props
- **Stories Config:** Voorgeconfigureerde stories met controls

## Installation

### Prerequisites

Prerequisites (voor Installation):
- Node.js (versie 18.x of hoger)
- npm (versie 9.x of hoger)
- Git


1. Clone de repository
```
git clone https://github.com/fdnd-agency/bajeslab.git
cd bajeslab
```
2. Installeer dependencies
```
npm install
```
4. Start de development server
```
npm run dev
```

5. Start Storybook:
```bash
npm run storybook
```

## Licentie
This project is licensed under the terms of the MIT license.
