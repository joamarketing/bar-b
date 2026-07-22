import { siteConfig } from "@/lib/site-config";

/**
 * JSON-LD structured data voor lokale SEO & AI-zoekmachines.
 *
 * EventVenue (subtype van LocalBusiness) beschrijft de zaal zelf,
 * inclusief het verhuurbare zaalmateriaal als Offers en het volledige
 * werkgebied (Tongeren, Borgloon, Haspengouw). Google, Bing én
 * AI-scrapers lezen dit blok om de zaak correct te tonen bij
 * zoekopdrachten zoals "feestzaal in Tongeren-Borgloon en omstreken".
 */
export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EventVenue", "LocalBusiness"],
        "@id": `${siteConfig.url}/#venue`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        description: siteConfig.description,
        url: siteConfig.url,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        image: `${siteConfig.url}/og-image.jpg`,
        priceRange: "€€",
        currenciesAccepted: "EUR",
        address: {
          "@type": "PostalAddress",
          streetAddress: `${siteConfig.address.building}, ${siteConfig.address.street}`,
          postalCode: siteConfig.address.postalCode,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.region,
          addressCountry: siteConfig.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.geo.latitude,
          longitude: siteConfig.geo.longitude,
        },
        areaServed: siteConfig.areaServed.map((place) => ({
          "@type": "Place",
          name: place,
        })),
        sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Uplighters / sfeerverlichting", value: true },
          { "@type": "LocationFeatureSpecification", name: "Statafels", value: true },
          { "@type": "LocationFeatureSpecification", name: "Barkrukken", value: true },
          { "@type": "LocationFeatureSpecification", name: "Opklapbare stoelen", value: true },
          { "@type": "LocationFeatureSpecification", name: "Parkeergelegenheid", value: true },
        ],
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Zaalverhuur voor fuiven en feesten",
              areaServed: "Tongeren-Borgloon en omstreken",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Zaalverhuur voor recepties en corporate events",
              areaServed: "Tongeren-Borgloon en omstreken",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Verhuur zaalmateriaal: uplighters, statafels, barkrukken en opklapbare stoelen",
              areaServed: "Haspengouw",
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: "nl-BE",
        publisher: { "@id": `${siteConfig.url}/#venue` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
