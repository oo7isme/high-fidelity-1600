# High-Fidelity Prototype Dokumentasjon - ByggOm

## 1. Introduksjon og Produktoversikt

### Om ByggOm
ByggOm er en innovativ digital plattform som tilbyr en bærekraftig løsning for handel med gjenbrukte byggematerialer i Norge. Plattformen kobler sammen selgere og kjøpere av kvalitetsbyggematerialer, med fokus på å redusere avfall i byggebransjen og fremme sirkulær økonomi.

### Målgruppe
- **Primære brukere**: Byggentreprenører, håndverkere og private personer involvert i byggeprosjekter
- **Sekundære brukere**: Miljøbevisste forbrukere og bedrifter som ønsker bærekraftige byggeløsninger
- **Geografisk fokus**: Norge, med regional inndeling for effektiv logistikk

### Brukerinteraksjon med Produktet
Brukerne samhandler med ByggOm gjennom en intuitiv, mobil-først designet plattform som lar dem:

- **Søke og filtrere** byggematerialer basert på type, materiale, lokasjon og pris
- **Utforske** inspirerende gjenbruksprosjekter gjennom bloggseksjonen
- **Kommunisere** direkte med selgere gjennom innebygd meldingssystem
- **Administrere** sine interesser og transaksjoner i en organisiert oversikt
- **Selge** egne materialer gjennom enkel annonseoppretting

![ByggOm Forside](images/byggOm.png)
*Forsiden viser hovedfunksjonene og gir direkte tilgang til søk og utforskning*

## 2. User Testing av Mid-Fidelity Prototype

### Testmetodologi
Vi gjennomførte brukertesting med to representative brukere fra målgruppen for å evaluere mid-fidelity prototypen og identifisere forbedringsområder.

### Bruker 1 - Erfaren Byggentreprenør (Far)

**Bakgrunn**: Erfaren i byggebransjen, prioriterer effektivitet og kvalitet

**Hovedfunn**:

**Forside - Positive inntrykk:**
> "Liker hvordan man kommer rett på sak og at man kan starte filtrering og søk. Man vil veldig gjerne at ting skal gå fort og slippe å lete etter filtreringsområder."

**Produktoversikt - Identifiserte problemer:**
- Filter tekst var for liten og vanskelig å lese
- Ønsket flere filtreringsalternativer for bedre spesifisering

**Vareside - Kritisk funn:**
> "Bestill knappen – spør om det er et lager som bestilles fra eller om det er privat person, ble litt usikkerheter der."

**Viktige behov identifisert:**
1. **Troverdighet og sikkerhet**: Behov for oversikt over selgerens pålitelighet
2. **Organisert administrasjon**: "Jeg trenger ikke å bruke mye tid på å få orden på hva jeg har kjøpt, når og hvor"
3. **Kvalitetssikring**: Prioriterer leverandører som "respekterer tiden din og at ting er på plass som det skal"

### Bruker 2 - Bruker (Bror)

**Bakgrunn**: Mindre erfaren, ønsker enkelhet og oversikt

**Hovedfunn**:

**Generell tilnærming:**
> "Synes det ser veldig bra ut, oversiktlig, rett på søkelista"

**Identifiserte forbedringer:**
- Ønsket flere materialalternativer i søket
- Søkebar kunne vært større for bedre synlighet
- Samme bekymring som Bruker 1: "Hvordan vet jeg om han er troverdig og ikke scammer meg?"

**Kvalitetssikring:**
> "La oss si materialer er langt unna, hvordan kan jeg forsikre meg om at jeg ikke kommer til å bruke tid og kostnader for å hente den bare for at den skal være ubrukelig?"

### Blogg-konseptet - Brukerfeedback

**Inspirasjonsbehov:**
> "Elsker instagram, kunne ha tenkt seg å vandre rundt på bloggen for å finne ideer fra relevante folk som selger varer allerede."

**Verdi for brukere:**
- Viser kreative løsninger med gjenbrukt materiale
- Gir inspirasjon for prosjekter
- Fokuserer på relevant innhold uten "rot" fra andre kilder
- "Enkelt og greit å finne ideer til prosjektet sitt uten å bruke så mye tid på det"

## 3. Identifiserte Endringer fra User Testing

Basert på brukertestingen identifiserte vi syv kritiske endringer som måtte implementeres i high-fidelity prototypen:

### A. Blogg/Inspirasjonsseksjon

**Problem**: Brukere ønsket inspirasjon og ideer for gjenbruksprosjekter
**Løsning**: Dedikert bloggseksjon implementert med:
- Artikler om bærekraftig bygging
- DIY-guider for gjenbruk
- Prosjektcases og inspirasjon
- Kategorisert innhold (Gjenbruk, Konstruksjon, Renovering, DIY, Miljø, Marked)

![Blogg Seksjon](images/blog-section.png)
*Bloggseksjonen gir brukere inspirasjon og praktiske tips for gjenbruksprosjekter*

### B. Profilside med Troverdighet

**Problem**: Behov for trygghet, kvalitet og sikkerhet i transaksjoner
**Løsning**: Omfattende profilsider med:
- Vurderingssystem (4.8/5 stjerner)
- Antall bestillinger og salg
- Verifiseringsbadges ("Verifisert", "Premium medlem", "Miljøvennlig")
- Medlemskap varighet (3 år medlem)
- Nylige bestillinger med status
- Om-meg seksjon med spesialisering

![Profilside](images/profile-page.png)
*Profilsiden viser selgerens troverdighet og historikk for trygg handel*

### C. Kvitteringer/Liste-side (tidligere handlekurv)

**Problem**: Behov for organisert oversikt over interesserte produkter
**Løsning**: Finn.no-inspirert løsning hvor brukere:
- Legger produkter i en liste (ikke tradisjonell handlekurv)
- Sender meldinger direkte til selger via plattformen
- Ser oversikt over alle forespørsler og transaksjoner
- Får bekreftelse på sendte meldinger

![Handlekurv/Liste](images/basket-page.png)
*Liste-siden lar brukere organisere interesserte produkter og kommunisere med selgere*

### D. Ny Annonse-side

**Problem**: Brukere må kunne selge egne materialer enkelt og spesifikt
**Løsning**: Detaljert skjema med seksjoner:
- Grunnleggende informasjon (tittel, kategori, materiale)
- Detaljer og spesifikasjoner (vekt, pris, enhet, tilstand)
- Lokasjon og levering (region, by, leveringsalternativer)
- Beskrivelse og bilder (opptil 5 bilder, 5MB hver)
- Kontaktinformasjon

![Ny Annonse](images/annonse-form.png)
*Detaljert skjema for å publisere nye annonser med all nødvendig informasjon*

### E. Meldingssystem (fjernet direkte kontaktinfo)

**Problem**: Sikkerhet og plattformkontroll
**Løsning**: Innebygd meldingssystem som:
- Fjerner direkte telefon/e-post fra annonser
- Lar brukere sende meldinger via plattformen
- Sporer meldingsstatus ("sendt", "lest", etc.)
- Inkluderer produktkontekst i hver melding

![Meldingssystem](images/messages-page.png)
*Meldingssystemet sikrer trygg kommunikasjon mellom kjøpere og selgere*

### F. Meny Sidepanel

**Problem**: Organisere navigasjon og snarveier
**Løsning**: Responsiv meny med:
- Alle hovedfunksjoner lett tilgjengelig
- Mobil-optimalisert hamburgermeny
- Tydelige ikoner og beskrivelser
- Rask tilgang til alle sider

![Mobil Meny](images/mobile-menu.png)
*Responsiv meny som organiserer alle funksjoner for enkel navigasjon*

### G. Forbedrede Filtre

**Problem**: Filter tekst var for liten, behov for flere alternativer
**Løsning**: Større, tydeligere filtre med:
- Lagrede filterfunksjoner
- Utvidede kategorier og materialer
- Pris- og vektområder
- Tydeligere visuell presentasjon

![Filtre](images/filters-sidebar.png)
*Forbedrede filtre med lagringsfunksjonalitet og utvidede alternativer*

## 4. High-Fidelity Design Valg

### Teknologisk Stabel

**Frontend Framework**: Next.js 14
- App Router for moderne routing
- Server-side rendering for optimal ytelse
- Automatisk kode-splitting

**Programmeringsspråk**: TypeScript
- Type-sikkerhet for robust utvikling
- Bedre utvikleropplevelse
- Redusert feil i produksjon

**Styling**: Tailwind CSS
- Utility-first CSS framework
- Responsivt design ut av boksen
- Konsistent design system

**State Management**: React Context API
- Global state for brukerdata
- Persistent lagring med localStorage
- Enkel dataflyt mellom komponenter

### UI/UX Prinsipper

**Designfilosofi**:
- **Minimalistisk**: Rent, fokusert design uten distraksjoner
- **Brukervennlig**: Intuitive interaksjoner og klar navigasjon
- **Effektiv**: Rask tilgang til funksjoner og informasjon
- **Tilgjengelig**: Universell utforming, tastaturnavigasjon og skjermleserstøtte

**Visuell hierarki og layout-system**:
- Tydelige overskrifter og seksjoner, konsekvent skala (H1–H3, brødtekst, small)
- 8px spacing-system for rytme og lesbarhet
- Grid-basert produktkortlayout (2–4 kolonner avhengig av skjermbredde)
- Tydelige call-to-action knapper med primær blå stil

**Navigasjon**:
- Fast toppnavigasjon med ikoner og tydelige merkede snarveier
- Mobil: hamburgermeny med speilet struktur og statusbadges (handleliste, meldinger, varsler)
- Kontekstuelle tilbake-/fortsett-handlinger på detaljsider

**Interaksjonsmønstre**:
- Primærhandling alltid plassert nederst til høyre på desktop, nederst i visningen på mobil
- Sekundærhandling som tekstknapp/outline for lavere vekt
- Bekreftelser og tilbakemelding via ikke-inngripende toasts og inline statuser

**Tomtilstander og feilhåndtering**:
- Tomme lister viser forklarende tekst, ikon og tydelig «kom i gang»-knapp
- Skjemavalidering med feltvise hjelpetekster og oppsummering ved submit-feil
- Feilmeldinger formuleres løsningsorientert («Skriv inn vekt i kg»)

**Tilgjengelighet**:
- Kontrastforhold mål: ≥ 4.5:1 for tekst, ≥ 3:1 for UI-elementer
- Fokusindikatorer for alle interaktive elementer
- ARIA-roller/labels for modal, toasts og navigasjon
- Tastaturfokusfelle i modaler

**Bevegelse og mikrointeraksjoner**:
- Subtile hover-/press-effekter (2–4ms ease-in-out, 150–250ms varighet)
- Skaler/skyggeskift på kort ved hover for affordance
- Redusert bevegelse respekteres via prefers-reduced-motion

**Skjemaer**:
- Seksjonering i logiske grupper med tydelige labels og hjelpetekst
- Input-størrelser tilpasset berøring (min. 44×44px)
- Progressive hint (plassholder + eksempelverdier) og sanntidsvalidering

### Fargeskjema

**Primærfarger (Blå profil)**:
- **Blå 600 (#2563eb)**: Primær handling, linker, fokus og merkevare
- **Blå 800 (#1e40af)**: Titteltekst, sterke aksenter og hover-stater

**Sekundær-/statusfarger**:
- **Grønn 500 (#10b981)**: Successtilbakemeldinger og positive statuser
- **Oransje 500 (#f59e0b)**: Sekundære call-to-actions og advarsler
- **Rød 500 (#ef4444)**: Destruktive handlinger og feil

**Nøytrale farger**:
- **Gråskala**: #f9fafb (bakgrunn) → #111827 (primær tekst)
- **Jordtoner** (lette bakgrunner på kort) for varm, materiell følelse

### Typografi

**Font-familie**: Inter (Sans-serif)
- Høy lesbarhet på alle enheter
- Moderne, profesjonell utseende
- God støtte for norske tegn

**Størrelser**:
- **H1**: 2.25rem (36px) - Hovedoverskrifter
- **H2**: 1.875rem (30px) - Seksjonsoverskrifter
- **H3**: 1.5rem (24px) - Underseksjoner
- **Body**: 1rem (16px) - Hovedtekst
- **Small**: 0.875rem (14px) - Hjelpetekst

## 5. Implementerte Funksjoner og Sidedetaljer

### Forside (/) - Hovedportalen

**Design og Layout**:
- Hero-bilde med overlay som viser plattformens verdi
- Større, mer synlig søkebar med ikon og placeholder-tekst
- Tre utforskingskort i grid-layout som guider brukere til hovedfunksjoner
- Responsivt design som tilpasser seg alle skjermstørrelser

**Funksjonalitet**:
- **Søkefunksjon**: Direkte søk med enter-tast eller klikk
- **Utforskingskort**: 
  - Materialer: Viser populære materialkategorier
  - Regioner: Geografisk oversikt over tilgjengelige områder  
  - Kategorier: Byggekategorier som gulv, bjelker, vinduer
- **Navigasjon**: Rask tilgang til alle hovedfunksjoner via header

**Brukeropplevelse**:
- Umiddelbar forståelse av plattformens formål
- Intuitiv navigasjon til ønsket funksjonalitet
- Visuell appell med profesjonelle bilder og moderne design

![Forside Hero](images/hero-section.png)
*Hero-seksjonen gir direkte tilgang til søk og utforskning*

### Produktoversikt (/products) - Hovedbrowsing

**Design og Layout**:
- To-kolonne layout med filter-sidepanel (300px) og hovedinnhold
- Sticky filter-sidepanel som følger med ved scrolling
- Responsivt produktgrid som tilpasser seg skjermstørrelse
- Tydelige filter-tags som viser aktive filtre

**Funksjonalitet**:
- **Avanserte filtre**:
  - Materiale: Eik, Furu, Tre, Glass, Keramikk, Stål
  - Kategori: Gulv, Bjelker, Vinduer, Dører, Fliser
  - Region: Vestlandet, Trøndelag, Østlandet, Sørlandet, Nord-Norge
  - Pris- og vektområder med min/max input
- **Lagrede filtre**: Brukere kan lagre og gjenbruke filterkombinasjoner
- **Søk**: Integrert søkebar med sanntidsfiltrering
- **Produktkort**: Hover-effekter, tilgjengelighetsbadge, produktinfo

**Brukeropplevelse**:
- Effektiv filtrering for å finne relevante materialer
- Visuell feedback på aktive filtre
- Rask navigasjon til produktdetaljer

![Produktoversikt](images/products-page.png)
*Produktoversikten med forbedrede filtre og bedre visuell presentasjon*

### Produktdetaljer (/products/[id]) - Detaljert Visning

**Design og Layout**:
- To-kolonne layout med stort produktbilde og detaljert informasjon
- Tydelig hierarki med overskrifter og seksjoner
- Call-to-action knapp prominent plassert
- Responsivt design som stables på mobil

**Funksjonalitet**:
- **Produktinformasjon**:
  - Spesifikasjoner: Tykkelse, vekt, lengde, bredde, pris
  - Beskrivelse med ikon og strukturert layout
  - Materialets historie og opprinnelse
- **Interaksjon**: "Legg til i lista" knapp med hover-effekter
- **Bildevisning**: Stort produktbilde med hover-zoom effekt

**Brukeropplevelse**:
- Komplett oversikt over produktet før beslutning
- Tydelig informasjon om materialets tilstand og historie
- Enkel handling for å uttrykke interesse

![Produktdetaljer](images/product-detail.png)
*Detaljert produktvisning med all relevant informasjon*

### Handlekurv/Liste (/basket) - Interesseorganisering

**Design og Layout**:
- Liste-basert layout i stedet for tradisjonell handlekurv
- Hvert element viser produktbilde, info og handlinger
- Tomtilstand med forklarende tekst og call-to-action
- Modal for meldingsskjema

**Funksjonalitet**:
- **Produktliste**: Viser alle interesserte produkter
- **Meldingssystem**: 
  - "Send melding" knapp for hvert produkt
  - Modal med produktkontekst og meldingsskjema
  - Automatisk overføring til meldingssystem etter sending
- **Administrasjon**: Fjern-produkt funksjonalitet
- **Tomtilstand**: Veiledning til å utforske produkter

**Brukeropplevelse**:
- Organisert oversikt over interesserte produkter
- Enkel kommunikasjon med selgere
- Tydelig produktkontekst i meldinger

![Handlekurv](images/basket-detail.png)
*Liste-funksjonen lar brukere organisere og kommunisere om produkter*

### Meldingssystem (/messages) - Kommunikasjon

**Design og Layout**:
- Kort-basert layout for hver melding
- Produktkontekst vises øverst i hvert kort
- Meldingsstatus med fargekoding
- Tomtilstand med veiledning

**Funksjonalitet**:
- **Meldingsoversikt**:
  - Produktkontekst: Bilde, tittel, vekt, pris
  - Meldingsinnhold med tidsstempel
  - Status-indikator: "sendt", "lest", etc.
- **Administrasjon**: Slett melding med bekreftelse
- **Status tracking**: Visuell indikator på meldingsstatus

**Brukeropplevelse**:
- Oversikt over all kommunikasjon med selgere
- Tydelig produktkontekst for hver melding
- Enkel administrasjon av meldinger

![Meldingssystem](images/messages-detail.png)
*Meldingssystemet sikrer trygg kommunikasjon med produktkontekst*

### Profilsider (/profile) - Troverdighet og Historie

**Design og Layout**:
- Hero-header med gradient bakgrunn og profilbilde
- To-kolonne layout med statistikk og detaljer
- Badge-system for troverdighetsindikatorer
- Responsivt design som stables på mobil

**Funksjonalitet**:
- **Profilinformasjon**:
  - Avatar med online-status indikator
  - Navn, tittel, lokasjon
  - Verifiseringsbadges: "Verifisert", "Premium medlem", "Miljøvennlig"
- **Statistikk**:
  - Antall bestillinger (12)
  - Vurdering (4.8/5 stjerner)
  - Medlemskap varighet (3 år)
- **Historikk**: Nylige bestillinger med status
- **Interesser**: Tag-basert visning av brukerinteresser

**Brukeropplevelse**:
- Tydelig oversikt over selgerens troverdighet
- Statistikk som bygger tillit
- Profesjonell presentasjon

![Profilside](images/profile-detail.png)
*Detaljerte profilsider med troverdighetsindikatorer*

### Ny Annonse (/annonse) - Salgsoppretting

**Design og Layout**:
- Seksjonert skjema med tydelige overskrifter
- To-kolonne layout for relaterte felt
- Bildeopplasting med preview-funksjonalitet
- Responsivt design som stables på mobil

**Funksjonalitet**:
- **Grunnleggende informasjon**:
  - Tittel, kategori, materiale (påkrevd)
  - Dropdown-menyer for standardiserte valg
- **Detaljer og spesifikasjoner**:
  - Vekt, pris, enhet, tilstand
  - Numeriske input med validering
- **Lokasjon og levering**:
  - Region (påkrevd), by, leveringsalternativer
- **Beskrivelse og bilder**:
  - Tekstområde for detaljert beskrivelse
  - Bildeopplasting (opptil 5 bilder, 5MB hver)
  - Preview med fjern-funksjonalitet
- **Kontaktinformasjon**:
  - Navn (påkrevd), telefon, e-post (påkrevd)

**Brukeropplevelse**:
- Strukturert skjema som guider brukeren
- Validering og feilhåndtering
- Visuell feedback på bildeopplasting

![Annonse Skjema](images/annonse-detail.png)
*Detaljert skjema for å publisere nye annonser*

### Blogg (/blog) - Inspirasjon og Læring

**Design og Layout**:
- Featured artikkel i to-kolonne layout
- Grid-basert artikkeloversikt
- Kategorisert innhold med fargekoding
- Newsletter-signup seksjon

**Funksjonalitet**:
- **Featured artikkel**:
  - Stort bilde med overlay
  - Kategori-badge, tittel, beskrivelse
  - Metadata: forfatter, dato, lesetid
- **Artikkelgrid**:
  - Responsivt grid (auto-fit, minmax 350px)
  - Kategori-badges med fargekoding
  - Hover-effekter med bilde-zoom
- **Kategorier**: Miljø, Gjenbruk, Konstruksjon, Renovering, DIY, Marked
- **Newsletter**: E-post signup med validering

**Brukeropplevelse**:
- Inspirerende innhold som motiverer gjenbruk
- Enkel navigasjon mellom artikler
- Kategorisert innhold for rask orientering

![Blogg](images/blog-detail.png)
*Bloggseksjonen gir inspirasjon og praktiske tips*

### Kvitteringer/Ordre (/kvittering) - Transaksjonsoversikt

**Design og Layout**:
- Tab-basert navigasjon mellom kvitteringer og ordre
- Kort-basert layout for hver transaksjon
- Status-indikatorer med fargekoding
- Modal for detaljert visning

**Funksjonalitet**:
- **Tab-navigasjon**: Kvitteringer og Ordre
- **Transaksjonskort**:
  - Transaksjonsnummer, type, dato
  - Produktliste med bilder og detaljer
  - Totalpris og status
- **Status-system**:
  - Fargekodet status: Levert, Under levering, etc.
  - Type-indikator: Kjøp vs Salg
- **Detaljert visning**: Modal med komplett transaksjonsinfo

**Brukeropplevelse**:
- Organisert oversikt over alle transaksjoner
- Tydelig status-tracking
- Enkel tilgang til detaljert informasjon

### Varsler/Notifikasjoner (/varsler) - Systemmeldinger

**Design og Layout**:
- Liste-basert layout med prioritetsindikatorer
- Fargekodet venstre-border for prioritet
- Unread-indikator med rød prikk
- Bulk-handlinger for administrasjon

**Funksjonalitet**:
- **Notifikasjonstyper**:
  - Høy prioritet: Rød border og ikon
  - Medium prioritet: Oransje border
  - Lav prioritet: Grønn border
- **Status-håndtering**:
  - Markér som lest
  - Slett notifikasjon
  - Bulk-operasjoner
- **Kontekst**: Produktrelaterte notifikasjoner med lenker

**Brukeropplevelse**:
- Tydelig prioritetsindikering
- Effektiv administrasjon av notifikasjoner
- Kontekstuell informasjon

### Mobil Meny - Navigasjonsorganisering

**Design og Layout**:
- Slide-in meny fra høyre side
- Gradient header med logo og lukke-knapp
- Liste-basert navigasjon med ikoner
- Status-badges for meldinger og handlekurv

**Funksjonalitet**:
- **Navigasjonsstruktur**:
  - Alle hovedfunksjoner tilgjengelig
  - Ikoner med beskrivende tekst
  - Status-indikatorer (antall meldinger, handlekurv)
- **Responsivt design**: Tilpasset for touch-interaksjon
- **Overlay**: Bakgrunns-blur for fokus

**Brukeropplevelse**:
- Enkel tilgang til alle funksjoner på mobil
- Tydelig visuell hierarki
- Rask navigasjon med status-oversikt

## 6. Detaljert Sideanalyse og Designbeslutninger

### 6.1 Forside - Design og Brukeropplevelse

**Designfilosofi for Forsiden**:
Forsiden fungerer som "landing page" for ByggOm og må umiddelbart kommunisere plattformens verdi og formål. Designet fokuserer på å redusere kognitiv belastning og gi brukerne klare handlingsalternativer.

**Visuell Hierarki**:
- **Hero-bilde**: Stort, inspirerende bilde som viser bærekraftig bygging
- **Overlay-tekst**: Kort, kraftig melding som forklarer plattformens verdi
- **Søkebar**: Prominent plassert for umiddelbar tilgang til hovedfunksjonen
- **Utforskingskort**: Tre like store kort som guider til hovedkategorier

**Brukeropplevelse-design**:
- **Første inntrykk**: Brukeren skal umiddelbart forstå at dette er en plattform for gjenbruk av byggematerialer
- **Handlingsorientert**: Alle elementer leder til konkrete handlinger (søk, utforsk, naviger)
- **Visuell appell**: Profesjonelle bilder og moderne design bygger tillit

**Responsivt Design**:
- **Desktop**: To-kolonne layout med hero-bilde og utforskingskort
- **Tablet**: Stables layout med justerte størrelser
- **Mobil**: En-kolonne layout med optimalisert touch-interaksjon

### 6.2 Produktoversikt - Filtrering og Browsing

**Designfilosofi for Produktoversikt**:
Produktoversikten må balansere omfattende filtrering med enkel browsing. Brukerne skal kunne finne det de leter etter raskt, men også oppdage nye muligheter.

**Filter-sidepanel Design**:
- **Sticky posisjonering**: Følger med ved scrolling for kontinuerlig tilgang
- **Kategorisert organisering**: Logisk gruppering av filtertyper
- **Visuell feedback**: Tydelige indikatorer på aktive filtre
- **Lagrede filtre**: Avansert funksjonalitet for power users

**Produktgrid Design**:
- **Konsistent layout**: Alle kort har samme struktur for forutsigbarhet
- **Hover-effekter**: Subtile animasjoner som gir feedback
- **Informasjonshierarki**: Viktigste info (tittel, pris, lokasjon) fremhevet
- **Tilgjengelighetsindikatorer**: Visuell feedback på produktstatus

**Brukeropplevelse-prinsipper**:
- **Effektivitet**: Rask tilgang til filtrering og søk
- **Oversikt**: Tydelig visning av alle tilgjengelige alternativer
- **Kontroll**: Brukeren har full kontroll over hva som vises

### 6.3 Produktdetaljer - Informasjonsarkitektur

**Designfilosofi for Produktdetaljer**:
Produktdetaljsiden må bygge tillit og gi all nødvendig informasjon for en kjøpsbeslutning, samtidig som den bevarer enkelhet og klarhet.

**Informasjonshierarki**:
- **Produktbilde**: Stort, høykvalitets bilde som viser materialet
- **Grunnleggende info**: Tittel, pris, lokasjon prominent plassert
- **Spesifikasjoner**: Strukturert tabell med tekniske detaljer
- **Beskrivelse**: Kontekstuell informasjon om materialets historie
- **Call-to-action**: Tydelig "Legg til i lista" knapp

**Tillitsbygging**:
- **Detaljerte spesifikasjoner**: Viser at selgeren er seriøs
- **Materialets historie**: Gir kontekst og verdi
- **Profesjonell presentasjon**: Bygger tillit til selgeren

**Interaksjonsdesign**:
- **Hover-effekter**: Subtile animasjoner på bilde og knapper
- **Responsivt layout**: Tilpasser seg alle skjermstørrelser
- **Tydelige handlinger**: Enkelt å forstå hva som skjer når man klikker

### 6.4 Handlekurv/Liste - Brukerflyt og Kommunikasjon

**Designfilosofi for Handlekurv**:
Handlekurven fungerer som en "interesse-liste" i stedet for tradisjonell handlekurv, og fokuserer på å legge til rette for kommunikasjon med selgere.

**Liste-basert Design**:
- **Horisontal layout**: Produktbilde, info og handlinger i en rad
- **Visuell hierarki**: Tydelig skille mellom produktinfo og handlinger
- **Status-indikatorer**: Visuell feedback på handlinger

**Meldingssystem Integrasjon**:
- **Kontekstuell kommunikasjon**: Produktinfo inkludert i meldingsskjema
- **Modal-design**: Fokuserer oppmerksomheten på meldingsskjemaet
- **Automatisk overføring**: Sømløs overgang til meldingssystem

**Tomtilstand Design**:
- **Veiledende tekst**: Forklarer hva som mangler og hvordan man kommer i gang
- **Call-to-action**: Tydelig knapp som leder til produktoversikt
- **Visuell appell**: Ikon og design som motiverer til handling

### 6.5 Meldingssystem - Kommunikasjonsdesign

**Designfilosofi for Meldingssystem**:
Meldingssystemet må gi brukerne full oversikt over kommunikasjonen med selgere, samtidig som det bevarer produktkontekst og sikrer trygg kommunikasjon.

**Kort-basert Layout**:
- **Produktkontekst øverst**: Bilde og grunnleggende info om produktet
- **Meldingsinnhold**: Tydelig skille mellom melding og metadata
- **Status-indikatorer**: Visuell feedback på meldingsstatus

**Informasjonsarkitektur**:
- **Kronologisk organisering**: Nyeste meldinger øverst
- **Produktkontekst**: Hver melding har tilknytning til spesifikt produkt
- **Metadata**: Tidsstempel og status tydelig markert

**Administrasjonsfunksjoner**:
- **Slett-funksjonalitet**: Enkel måte å rydde opp i gamle meldinger
- **Status-tracking**: Visuell indikator på meldingsstatus
- **Bekreftelsesdialoger**: Sikrer at viktige handlinger bekreftes

### 6.6 Profilsider - Tillitsbygging og Troverdighet

**Designfilosofi for Profilsider**:
Profilsidene må bygge tillit og vise selgerens troverdighet gjennom visuell presentasjon av statistikk, historikk og verifisering.

**Hero-header Design**:
- **Gradient bakgrunn**: Skaper visuell appell og profesjonell følelse
- **Profilbilde**: Personlig tilknytning med online-status indikator
- **Badge-system**: Visuell indikator på verifisering og status

**Statistikk-presentasjon**:
- **Kort-basert layout**: Hver statistikk i eget kort for klarhet
- **Visuell hierarki**: Større tall for viktige statistikk
- **Fargekoding**: Konsistent bruk av blå for troverdighet

**Historikk og Interesser**:
- **Nylige bestillinger**: Viser aktivitet og erfaring
- **Interesse-tags**: Visuell representasjon av brukerens fokusområder
- **Status-indikatorer**: Visuell feedback på ordre-status

### 6.7 Ny Annonse - Skjema-design og Brukeropplevelse

**Designfilosofi for Annonse-skjema**:
Annonse-skjemaet må guide brukeren gjennom en kompleks prosess på en enkel og intuitiv måte, med tydelig validering og feedback.

**Seksjonert Design**:
- **Logisk gruppering**: Relaterte felt gruppert sammen
- **Visuell separasjon**: Tydelige seksjoner med overskrifter
- **Progressiv avsløring**: Kompleksitet bygges opp gradvis

**Validering og Feedback**:
- **Sanntidsvalidering**: Umiddelbar feedback på input
- **Tydelige feilmeldinger**: Konkrete instruksjoner for retting
- **Visuell feedback**: Fargekoding og ikoner for status

**Bildeopplasting Design**:
- **Drag-and-drop interface**: Moderne, intuitiv opplevelse
- **Preview-funksjonalitet**: Umiddelbar visuell feedback
- **Fjern-funksjonalitet**: Enkel administrasjon av bilder

### 6.8 Blogg - Innholdsdesign og Inspirasjon

**Designfilosofi for Blogg**:
Bloggen må inspirere og lære, samtidig som den opprettholder plattformens profesjonelle image og bygger community.

**Featured Artikkel Design**:
- **To-kolonne layout**: Bilde og tekst side om side
- **Visuell hierarki**: Tydelig skille mellom kategori, tittel og innhold
- **Metadata-presentasjon**: Forfatter, dato og lesetid tydelig markert

**Artikkelgrid Design**:
- **Responsivt grid**: Tilpasser seg alle skjermstørrelser
- **Konsistent layout**: Alle kort har samme struktur
- **Hover-effekter**: Subtile animasjoner som engasjerer

**Kategorisering og Navigation**:
- **Fargekodet kategorier**: Visuell identifikasjon av innholdstype
- **Newsletter-integrasjon**: Bygger community og engasjement
- **Søk og filtrering**: Enkel navigasjon i innholdet

### 6.9 Kvitteringer/Ordre - Transaksjonsoversikt og Administrasjon

**Designfilosofi for Kvitteringer**:
Kvitteringssiden må gi brukerne komplett oversikt over alle transaksjoner (både kjøp og salg), med tydelig status-tracking og enkel tilgang til detaljert informasjon.

**Tab-basert Navigasjon**:
- **Kvitteringer**: Oversikt over alle kjøp og mottatte kvitteringer
- **Ordre**: Oversikt over alle salg og sendte ordre
- **Visuell skille**: Tydelig separasjon mellom kjøp og salg
- **Aktiv tab-indikator**: Blå understrek og bakgrunnsfarge for aktiv tab

**Transaksjonskort Design**:
- **Kort-basert layout**: Hver transaksjon i eget kort for klarhet
- **Header-informasjon**: Transaksjonsnummer, type og dato prominent plassert
- **Produktliste**: Visuell oversikt over alle produkter i transaksjonen
- **Footer-informasjon**: Totalpris og status tydelig markert

**Status-system og Fargekoding**:
- **Levert**: Grønn bakgrunn og border for fullførte transaksjoner
- **Under levering**: Oransje bakgrunn for pågående leveringer
- **Venter på bekreftelse**: Gul bakgrunn for ventende transaksjoner
- **Type-indikator**: "Kjøp" vs "Salg" med forskjellige fargekoder

**Produktinformasjon i Transaksjoner**:
- **Produktbilde**: Liten thumbnail for visuell identifikasjon
- **Produktdetaljer**: Tittel, vekt, pris og leverandør-informasjon
- **Leverandør-info**: Tydelig markering av hvem som leverer produktet
- **Leveringsadresse**: Fullstendig adresse-informasjon for ordre

**Modal for Detaljert Visning**:
- **Utvidet informasjon**: Komplett transaksjonsdetaljer i modal
- **Kvitteringsinfo**: Transaksjonsnummer, dato, type og status
- **Produktdetaljer**: Utvidet visning av alle produkter
- **Leveringsinformasjon**: Komplett adresse og kontaktinfo
- **Notater**: Eventuelle spesielle instruksjoner eller kommentarer

**Tomtilstand Design**:
- **Forklarende tekst**: Tydelig beskrivelse av hva som mangler
- **Motiverende melding**: Oppfordrer til å utforske produkter eller selge
- **Visuell appell**: Ikon og design som motiverer til handling
- **Call-to-action**: Tydelige knapper som leder til relevante handlinger

**Brukeropplevelse-prinsipper**:
- **Komplett oversikt**: Alle transaksjoner samlet på ett sted
- **Tydelig status-tracking**: Umiddelbar forståelse av transaksjonsstatus
- **Enkel navigasjon**: Rask tilgang til detaljert informasjon
- **Organisert presentasjon**: Logisk gruppering og kronologisk rekkefølge

**Responsivt Design for Kvitteringer**:
- **Mobil-optimalisering**: Kompakt layout for små skjermer
- **Touch-vennlige kort**: Større touch-mål for enkel navigasjon
- **Swipe-navigasjon**: Potensial for swipe mellom tabs
- **Modal-optimalisering**: Fullskjerm modal på mobil for bedre lesbarhet

### 6.10 Notifikasjoner/Varsler - Systemmeldinger og Prioritering

**Designfilosofi for Notifikasjoner**:
Notifikasjonssiden må gi brukerne effektiv oversikt over systemmeldinger og viktige oppdateringer, samtidig som den lar dem administrere og prioritere informasjonen.

**Prioritetsbasert Design**:
- **Høy prioritet**: Rød venstre-border og rød ikon for kritiske meldinger
- **Medium prioritet**: Oransje border og ikon for viktige oppdateringer
- **Lav prioritet**: Grønn border for informasjonsmeldinger
- **Visuell hierarki**: Fargekoding gir umiddelbar forståelse av viktighet

**Notifikasjonskort Design**:
- **Kort-basert layout**: Hver notifikasjon i eget kort for klarhet
- **Unread-indikator**: Rød prikk i øvre høyre hjørne for uleste meldinger
- **Ikon-system**: Tydelige ikoner som indikerer notifikasjonstype
- **Hover-effekter**: Subtile animasjoner som gir feedback

**Informasjonsarkitektur**:
- **Kronologisk organisering**: Nyeste notifikasjoner øverst
- **Metadata-presentasjon**: Tidsstempel og prioritet tydelig markert
- **Kontekstuell informasjon**: Produktrelaterte notifikasjoner med lenker
- **Status-indikatorer**: Visuell feedback på notifikasjonsstatus

**Administrasjonsfunksjoner**:
- **Markér som lest**: Enkel måte å administrere uleste meldinger
- **Slett-funksjonalitet**: Rydde opp i gamle notifikasjoner
- **Bulk-operasjoner**: Effektiv administrasjon av flere notifikasjoner
- **Bekreftelsesdialoger**: Sikrer at viktige handlinger bekreftes

**Brukeropplevelse-prinsipper**:
- **Effektiv scanning**: Rask oversikt over viktige meldinger
- **Kontroll**: Brukeren har full kontroll over notifikasjonsadministrasjon
- **Kontekst**: Tydelig tilknytning til relevante produkter eller handlinger
- **Redusert kognitiv belastning**: Prioritering og kategorisering forenkler håndtering

**Responsivt Design for Notifikasjoner**:
- **Mobil-optimalisering**: Touch-vennlige knapper og større touch-mål
- **Swipe-gestures**: Potensial for fremtidige swipe-funksjoner
- **Kompakt layout**: Effektiv bruk av skjermplass på små enheter
- **Prioritetsvisning**: Viktigste notifikasjoner fremhevet på mobil

### 6.11 Responsivt Design - Tilpasning til Alle Enheter

**Mobil-først Tilnærming**:
- **Touch-optimalisering**: Alle interaktive elementer minst 44x44px
- **En-kolonne layout**: Stables layout for bedre lesbarhet
- **Forenklet navigasjon**: Hamburger-meny for å spare plass

**Tablet-optimalisering**:
- **To-kolonne layout**: Balanserer innhold og navigasjon
- **Touch og peker**: Støtter både touch og mus-interaksjon
- **Justert spacing**: Optimaliserer for mellomstor skjerm

**Desktop-forbedringer**:
- **Hover-effekter**: Rike interaksjoner med mus
- **Keyboard-navigasjon**: Full støtte for tastaturnavigasjon
- **Multi-kolonne layout**: Utnytter skjermplass effektivt

### 6.12 Tilgjengelighet og Universal Design

**Visuell Tilgjengelighet**:
- **Kontrastforhold**: Minimum 4.5:1 for tekst, 3:1 for UI-elementer
- **Fargeblindhet**: Ikke avhengig av farge alene for informasjon
- **Skalerbar tekst**: Støtter brukerens tekststørrelse-preferanser

**Motorisk Tilgjengelighet**:
- **Touch-mål**: Alle interaktive elementer minst 44x44px
- **Keyboard-navigasjon**: Full funksjonalitet med tastatur
- **Fokus-indikatorer**: Tydelige visuelle indikatorer for fokus

**Kognitiv Tilgjengelighet**:
- **Klar navigasjon**: Konsistent navigasjonsstruktur
- **Tydelige instruksjoner**: Konkrete, handlingsorienterte tekster
- **Feilhåndtering**: Konstruktive feilmeldinger med løsningsforslag

## 7. Konklusjon

### Oppsummering av Designprosessen

High-fidelity prototypen for ByggOm representerer en betydelig forbedring fra mid-fidelity versjonen, direkte informert av brukertesting. De syv identifiserte endringene har skapt en mer brukervennlig, trygg og effektiv plattform for bærekraftig byggematerialhandel.

### Nøkkel Suksesser

1. **Forbedret Brukeropplevelse**: Større søkebar, tydeligere filtre og bedre navigasjon
2. **Økt Trygghet**: Profilsider med troverdighetsindikatorer og innebygd meldingssystem
3. **Bedre Organisering**: Liste-funksjonalitet og kvitteringssystem for oversikt
4. **Inspirasjon og Læring**: Bloggseksjon for kreativ gjenbruk og prosjektideer
5. **Enkel Selging**: Detaljert annonse-skjema for kvalitetssikring

### Brukerbehov Dekket

- **Effektivitet**: Rask tilgang til funksjoner og informasjon
- **Trygghet**: Troverdighetsindikatorer og sikker kommunikasjon
- **Organisering**: Oversikt over interesser og transaksjoner
- **Inspirasjon**: Kreative løsninger og prosjektideer
- **Kvalitet**: Detaljerte produktbeskrivelser og spesifikasjoner

### Fremtidige Muligheter

Basert på brukertestingen og implementerte løsninger, har ByggOm et solid fundament for:
- Skalering til større brukergrupper
- Integrasjon av betalingsløsninger
- Utvidelse til andre nordiske markeder
- Mobilapp-utvikling
- AI-drevet anbefalingssystem

High-fidelity prototypen demonstrerer hvordan grundig brukertesting kan informere designbeslutninger og skape en plattform som virkelig møter brukernes behov for bærekraftig byggematerialhandel.

---

*Denne dokumentasjonen beskriver designprosessen og implementeringen av ByggOm high-fidelity prototypen, basert på brukertesting og iterative forbedringer.*
