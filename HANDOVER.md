# Project Handover: Bajeslab Website

**Project:** Healthy Urban Living Lab Bajeskwartier Website  
**Opdrachtgever:** HULL Bajeskwartier (contactpersoon: Suus)  
**Development Team:** Branco van Beek & Saif Muhamad  
**Handover Datum:** Januari 2026  
**Repository:** [github.com/fdnd-agency/bajeslab](https://github.com/fdnd-agency/bajeslab)  
**Live Website:** [bajeslab.netlify.app](https://bajeslab.netlify.app)

---

## 1. Huidige Status van het Project

### Opgeleverde Pagina's (Productie-ready)
Alle kernpagina's zijn volledig ontwikkeld en functioneel:

- **Home:** Introductie met "Over ons" blok, samenvatting themalijnen, 3 uitgelichte projecten en nieuwsbriefaanmelding
- **Over ons:** Volledige organisatie-informatie, teamleden en gedetailleerde themalijnen
- **Projecten:** Overzichtspagina met alle HULL projecten
- **Projectdetail:** Dynamische detailpagina's per individueel project
- **Netwerk:** Overzicht partners en samenwerkingsorganisaties
- **Contact:** Contactpersonen en contactmogelijkheden

### Deployment Status
- **Main branch:** Automatisch deployed naar Netlify (productie)
- **Development branch:** Voor ontwikkelwerk
- Website is **live en operationeel**

---

## 2. Belangrijkste Features die Werken

### ✅ Volledig Functioneel

**Content Management**
- Directus CMS integratie werkt volledig
- Content kan eenvoudig beheerd worden zonder code-aanpassingen
- Dynamische content rendering voor projecten, team en partners

**Technische Features**
- Responsive design (desktop, tablet, mobiel)
- SEO & Geo-optimalisatie geïmplementeerd
- Storybook component library opgezet en documentatie aanwezig
- ⚠️ Nieuwsbriefaanmelding frontend aanwezig, maar **backend werkt niet**

**Development Workflow**
- Git workflow met feature branches staat opgezet
- Conventional commits afgesproken en gedocumenteerd
- Automatische deployment via Netlify bij push naar main

---

## 3. Grootste Aandachtspunten en Uitdagingen

### ⚠️ Belangrijke Aandachtspunten

**Design Implementatie**
- **HeroBlock:** Nieuw ontwerp is goedgekeurd door Suus maar nog niet geïmplementeerd. Het huidige heroBlock design is de oude versie.
- **Kleurenpalet:** Het redesign gebruikt nieuwe kleuren die nog niet omgezet zijn naar CSS-variabelen in de stylesheet. Momenteel worden mogelijk nog oude kleuren gebruikt.

**Ontbrekende Functionaliteit**
- **Nieuwsbrief aanmelding (KRITIEK):** De nieuwsbriefaanmelding op de homepage werkt momenteel niet serverside. Er is waarschijnlijk wel een frontend formulier, maar de backend integratie ontbreekt.
- **Projecten filter:** Filteroptie voor projecten is nog niet geïmplementeerd, waardoor gebruikers alle projecten handmatig moeten doorscrollen
- **Projecten Grid Layout:** Speciaal grid-ontwerp uit Figma is nog niet toegepast

**Toekomstige Features**
- **Interactive audio map:** Grote feature die volledig nieuw ontwikkeld moet worden. Concept is duidelijk maar implementatie vereist aanzienlijke development tijd.

### 🔧 Technische Overwegingen

- Storybook template folder bevat startkit voor nieuwe componenten
- Let op conventional commits om consistente git history te behouden
- Test altijd in development branch voor merge naar main (= productie)

---

## 4. Aanbevolen Eerste Stappen

### Prioriteit 1: Quick Wins (1-2 sprints)
1. **Nieuwsbrief serverside werkend krijgen**
   - **HOOGSTE PRIORITEIT** - feature staat op homepage maar werkt niet
   - Backend integratie moet opgezet worden (emailservice zoals Mailchimp, SendGrid of eigen oplossing)
   - Test grondig om te voorkomen dat gebruikers formulier invullen zonder resultaat

2. **HeroBlock rebuild implementeren**
   - Design is al goedgekeurd, implementatie relatief straightforward
   - Heeft directe impact op homepage ervaring
   - Check Figma design voor exacte specificaties

3. **Kleurenpalet updaten**
   - Omzetten redesign kleuren naar CSS-variabelen
   - Zorgt voor consistentie met goedgekeurd design
   - Relatief lage complexiteit, hoge impact

### Prioriteit 2: User Experience Verbetering (2-3 sprints)
4. **Projecten filter toevoegen**
   - Verbetert navigatie en vindbaarheid van projecten
   - Belangrijke UX feature voor gebruikers

5. **Projecten Grid Layout**
   - Implementeer speciaal grid-ontwerp uit Figma
   - Visuele upgrade voor projectenoverzicht

### Prioriteit 3: Innovatieve Feature (3-5 sprints)
6. **Interactive audio map**
   - Grootste en meest complexe backlog item
   - Vereist waarschijnlijk externe audio-bestanden hosting
   - Start met technische spike om haalbaarheid en architectuur te bepalen
   - Overleg met Suus over content (audiofragmenten)

---

## 5. Belangrijke Resources

### Documentatie & Design
- **Figma Design:** Alle ontwerpen en specificaties beschikbaar in Figma
- **README:** Volledige technische setup, installation en workflow gedocumenteerd
- **Storybook:** Component library met template voor nieuwe componenten

### Tech Stack Samenvatting
- **Frontend:** SvelteKit (HTML, CSS, JavaScript)
- **CMS:** Directus
- **Hosting:** Netlify (auto-deploy via GitHub)
- **Component Docs:** Storybook
- **Package Manager:** npm

### Contactpersonen
- **Opdrachtgever:** Suus (HULL Bajeskwartier)
- **Developers:** Branco van Beek, Saif Muhamad (GitHub links in README)

---

## 6. Development Tips

### Voor je Begint
1. Clone repository en installeer dependencies (`npm install`)
2. Start development server (`npm run dev`)
3. Check Storybook voor bestaande componenten (`npm run storybook`)
4. Bekijk Figma design voor visuele referentie
5. Test Directus CMS verbinding

### Workflow Checklist
- [ ] Maak feature branch vanaf development
- [ ] Gebruik conventional commits (feat:, fix:, etc.)
- [ ] Test lokaal voordat je pushed
- [ ] Maak Pull Request naar development (niet main!)
- [ ] Na approval: merge naar development
- [ ] Test op development environment
- [ ] Merge naar main voor productie deployment

### Code Quality
- Hergebruik bestaande componenten waar mogelijk
- Documenteer nieuwe componenten in Storybook
- Volg bestaande code structuur en naming conventions
- Test responsive design op verschillende devices

---

## 7. Veelgestelde Vragen

**Q: Waar vind ik login credentials voor Directus?**  
A: Check met de opdrachtgever (Suus) of vorige development team voor toegang.

**Q: Hoe deploy ik naar productie?**  
A: Automatisch via merge naar main branch. Netlify handled deployment.

**Q: Kan ik direct in main branch werken?**  
A: Nee, gebruik altijd feature branches → development → main workflow.

**Q: Waar staat de audio voor de interactive map?**  
A: Nog niet beschikbaar. Moet afgestemd worden met opdrachtgever.

---

## 8. Laatste Opmerkingen

Het project heeft een solide basis met werkende CMS integratie, responsive design en een duidelijke component structuur. De belangrijkste vervolgstappen zijn relatief duidelijk beschreven in de backlog. 

Succes met de doorontwikkeling! Bij vragen kun je contact opnemen met de opdrachtgever of de vorige developers (contactgegevens in README).

**Veel success! 🚀**
