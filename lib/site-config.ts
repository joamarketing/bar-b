/**
 * Centrale site-configuratie voor Bar-B.
 *
 * LET OP: vervang de placeholder-waarden (telefoon, e-mail, adres, socials)
 * door de echte gegevens vóór lancering. Alle componenten en de JSON-LD
 * schema lezen uit dit bestand, dus één aanpassing volstaat.
 */

export const siteConfig = {
  name: "Bar-B",
  legalName: "Bar-B Feestzaal & Evenementenlocatie",
  tagline: "Exclusieve feestzaal in het hart van Haspengouw",
  description:
    "Bar-B is dé exclusieve feestzaal en evenementenlocatie tussen Tongeren en Borgloon. Huur onze stijlvolle zaal voor fuiven, feesten, recepties, beurzen, quizzen en verjaardagsfeestjes — inclusief premium zaalmateriaal zoals uplighters, statafels, barkrukken en opklapbare stoelen.",
  url: "https://www.bar-b.be",
  locale: "nl_BE",

  contact: {
    // TODO: vervang door echte contactgegevens
    phone: "+32 12 34 56 78",
    phoneHref: "tel:+3212345678",
    email: "info@bar-b.be",
    emailHref: "mailto:info@bar-b.be",
  },

  address: {
    // TODO: vervang door het echte adres
    street: "Steenweg 1",
    postalCode: "3700",
    city: "Tongeren",
    region: "Limburg",
    country: "BE",
  },

  geo: {
    // Coördinaten regio Tongeren-Borgloon — TODO: verfijn naar exact adres
    latitude: 50.7803,
    longitude: 5.4649,
  },

  social: {
    // TODO: vervang door echte profielen of verwijder
    facebook: "https://www.facebook.com/barb.feestzaal",
    instagram: "https://www.instagram.com/barb.feestzaal",
  },

  areaServed: [
    "Tongeren",
    "Borgloon",
    "Haspengouw",
    "Sint-Truiden",
    "Bilzen",
    "Riemst",
    "Heers",
    "Wellen",
    "Kortessem",
    "Hoeselt",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
