# Bar-B — Exclusieve feestzaal in Tongeren-Borgloon

Premium one-page website voor feestzaal **Bar-B**, gebouwd met Next.js (App
Router), TypeScript, Tailwind CSS v4 en Framer Motion. Volledig in het
Nederlands (nl-BE) en geoptimaliseerd voor lokale SEO in de regio
Tongeren-Borgloon / Haspengouw.

## Ontwikkelen

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # productie-build
```

## Structuur

```
app/
  layout.tsx        # Globale metadata, Open Graph, fonts, JSON-LD injectie
  page.tsx          # Homepage — compositie van alle secties
  privacy/page.tsx  # Privacybeleid (GDPR)
  sitemap.ts        # /sitemap.xml
  robots.ts         # /robots.txt
components/
  Navbar.tsx        # Sticky navigatie met mobiel menu
  Hero.tsx          # Immersieve hero met CTA "Vraag uw datum aan"
  UseCases.tsx      # Fuiven & Feesten, Recepties, Beurzen & Quizzen, Verjaardagen
  Equipment.tsx     # Zaalmateriaal: uplighters, statafels, barkrukken, stoelen
  About.tsx         # Lokale verankering: Tongeren, Borgloon, Haspengouw
  CTASection.tsx    # Conversiesectie met contactgegevens
  InquiryForm.tsx   # Aanvraagformulier (mailto-fallback, klaar voor API-route)
  Footer.tsx        # Contact, navigatie, dynamische copyright, privacylinks
  SectionHeading.tsx
  StructuredData.tsx # JSON-LD: EventVenue/LocalBusiness + WebSite schema
  motion/FadeIn.tsx  # Herbruikbare scroll-reveal (respecteert reduced motion)
lib/
  site-config.ts    # Centrale gegevens: adres, contact, werkgebied, socials
```

## Vóór lancering

1. **Contactgegevens** — vervang de placeholders in `lib/site-config.ts`
   (telefoon, e-mail, adres, coördinaten, sociale media).
2. **Beeldmateriaal** — voeg toe in `/public`:
   - `og-image.jpg` (1200×630) voor social sharing;
   - hero-video of -foto (zie commentaar in `components/Hero.tsx`);
   - sfeerfoto van de zaal (zie commentaar in `components/About.tsx`).
3. **Domein** — pas `siteConfig.url` aan indien het domein afwijkt van
   `https://www.bar-b.be`.
4. **Formulier** — het aanvraagformulier opent nu een voorgevulde e-mail;
   koppel desgewenst een API-route of formulierdienst in
   `components/InquiryForm.tsx`.
