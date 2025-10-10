# Byggmaterialer.no - High Fidelity Prototype

En moderne, interaktiv prototype av en norsk byggmaterialer-markedsplass basert på wireframes.

## Funksjoner

### 🏠 Hjemmeside (Hovedside)
- Hero-bilde med gradient bakgrunn
- Søkefunksjon som leder til produktside
- Tre utforskningskategorier:
  - Utforsk etter sted (Nord-Norge, Trøndelag, Vestlandet, Østlandet, Sørlandet)
  - Utforsk etter kategori (Tømmer, Vindu, Mur, Tak, Trapper)
  - Utforsk etter materiale (Stål, Teak, Glass, Eik, Stein)
- Klikkbare elementer som filtrerer produkter

### 📦 Produktoversikt (Produktoversikt)
- Sidebar med omfattende filtre:
  - Materialkategorier (Tre, Glass, Stål, Isolasjon, etc.)
  - Pris- og vektområder
  - Geografiske områder
- Søkefunksjon
- Aktive filter-tags med mulighet for fjerning
- Produktkort i grid-layout med hover-effekter
- Responsivt design

### 🔍 Produktside (Vareside)
- Detaljert produktinformasjon
- Spesifikasjoner (tykkelse, vekt, lengde, bredde, pris)
- Produktbeskrivelse
- "Bestill"-knapp med animasjon
- Responsivt layout

## Tekniske Detaljer

### Teknologier
- **HTML5**: Semantisk markup
- **CSS3**: Modern styling med Flexbox og Grid
- **JavaScript (ES6+)**: Interaktiv funksjonalitet
- **Font Awesome**: Ikoner
- **Google Fonts**: Inter font-familie

### Design System
- **Fargepalett**: Norsk blå (#1e40af) som primærfarge
- **Typografi**: Inter font med forskjellige vekter
- **Spacing**: Konsistent 8px grid-system
- **Border radius**: 8px-16px for moderne utseende
- **Skygger**: Subtile box-shadows for dybde

### Responsivt Design
- **Desktop**: Full funksjonalitet med sidebar
- **Tablet**: Tilpasset layout
- **Mobile**: En-kolonne layout med touch-støtte

## Interaktive Funksjoner

### Navigasjon
- Single Page Application (SPA) arkitektur
- Smooth overganger mellom sider
- Browser back/forward støtte
- Keyboard navigasjon (ESC for hjem, Enter for søk)

### Søk og Filtrering
- Real-time søk med debouncing
- Multiple filter-kombinasjoner
- Filter-tags med enkel fjerning
- Automatisk produktfiltrering

### Animasjoner
- Fade-in effekter ved sidebytte
- Hover-effekter på interaktive elementer
- Loading states for knapper
- Smooth scrolling

### Touch-støtte
- Swipe-navigasjon på mobile enheter
- Touch-friendly knapper og lenker

## Filstruktur

```
high/
├── index.html          # Hovedfil med all HTML-struktur
├── styles.css          # Komplett CSS med responsive design
├── script.js           # JavaScript funksjonalitet
└── README.md           # Denne filen
```

## Bruk

1. Åpne `index.html` i en moderne nettleser
2. Naviger mellom sidene ved å klikke på elementer
3. Test søkefunksjonen på hjemmesiden
4. Filtrer produkter på produktsiden
5. Se produktdetaljer ved å klikke på produktkort
6. Test responsive design ved å endre vindusstørrelse

## Browser-støtte

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Utviklingsnotater

### State Management
Applikasjonen bruker et enkelt state-objekt (`appState`) for å holde styr på:
- Aktiv side
- Aktive filtre
- Produktdata
- Filtrerte produkter

### Performance
- Debounced søk for bedre ytelse
- Lazy loading av animasjoner
- Effektiv DOM-manipulasjon

### Tilgjengelighet
- Semantisk HTML
- Keyboard navigasjon
- ARIA-labels (kan utvides)
- Kontrast-vennlige farger

## Fremtidige Forbedringer

- [ ] Backend-integrasjon
- [ ] Brukerautentisering
- [ ] Produktbilder
- [ ] Chat-funksjonalitet
- [ ] PWA-funksjoner
- [ ] Testing (Jest/Cypress)
- [ ] TypeScript konvertering


