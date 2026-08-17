import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description: `Privacybeleid van ${siteConfig.name}, feestzaal in Tongeren-Borgloon. Lees hoe wij omgaan met uw persoonsgegevens.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-champagne-500">
          Juridisch
        </p>
        <h1 className="gold-rule font-serif text-4xl text-cream-50 sm:text-5xl">
          Privacybeleid
        </h1>

        <div className="mt-10 space-y-8 leading-relaxed text-cream-300">
          <section aria-labelledby="wie-zijn-wij">
            <h2 id="wie-zijn-wij" className="mb-3 font-serif text-2xl text-cream-50">
              Wie zijn wij?
            </h2>
            <p>
              {siteConfig.legalName}, gevestigd te {siteConfig.address.street},{" "}
              {siteConfig.address.postalCode} {siteConfig.address.city}, is
              verantwoordelijk voor de verwerking van persoonsgegevens zoals
              beschreven in dit privacybeleid. Vragen? Contacteer ons via{" "}
              <a
                href={siteConfig.contact.emailHref}
                className="text-champagne-400 underline-offset-4 hover:underline"
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="welke-gegevens">
            <h2 id="welke-gegevens" className="mb-3 font-serif text-2xl text-cream-50">
              Welke gegevens verwerken wij?
            </h2>
            <p>
              Wanneer u via ons aanvraagformulier contact opneemt, verwerken
              wij enkel de gegevens die u zelf meedeelt: uw naam, e-mailadres,
              telefoonnummer en de details van uw evenement. Wij gebruiken deze
              gegevens uitsluitend om uw aanvraag te beantwoorden en de huur
              van de zaal of het zaalmateriaal te organiseren.
            </p>
          </section>

          <section aria-labelledby="bewaartermijn">
            <h2 id="bewaartermijn" className="mb-3 font-serif text-2xl text-cream-50">
              Hoelang bewaren wij uw gegevens?
            </h2>
            <p>
              Wij bewaren uw gegevens niet langer dan nodig om uw aanvraag en
              eventuele boeking af te handelen, en maximaal zolang wettelijke
              (boekhoudkundige) verplichtingen dat vereisen.
            </p>
          </section>

          <section aria-labelledby="analyse" id="analyse">
            <h2 id="analyse" className="mb-3 font-serif text-2xl text-cream-50">
              Analyse &amp; meting
            </h2>
            <p>
              Om onze website te verbeteren, meten wij op een
              privacyvriendelijke manier hoe bezoekers de site gebruiken. Wij
              maken hiervoor gebruik van Usermaven, geconfigureerd in strikte
              privacymodus, en van de ingebouwde analysefunctie van onze
              hostingpartner. Deze meting verzamelt geanonimiseerde
              gebruiksstatistieken en wordt niet gebruikt voor advertenties.
            </p>
          </section>

          <section aria-labelledby="cookies" id="cookies">
            <h2 id="cookies" className="mb-3 font-serif text-2xl text-cream-50">
              Cookies
            </h2>
            <p>
              Deze website gebruikt geen advertentie- of marketingcookies.
              Naast strikt noodzakelijke, functionele technologie zetten wij
              enkel de hierboven beschreven privacyvriendelijke analyse en een
              chatfunctie in om u verder te helpen.
            </p>
          </section>

          <section aria-labelledby="uw-rechten">
            <h2 id="uw-rechten" className="mb-3 font-serif text-2xl text-cream-50">
              Uw rechten
            </h2>
            <p>
              U heeft steeds het recht op inzage, correctie en verwijdering
              van uw persoonsgegevens. Daarnaast kunt u bezwaar maken tegen de
              verwerking of een klacht indienen bij de
              Gegevensbeschermingsautoriteit (
              <a
                href="https://www.gegevensbeschermingsautoriteit.be"
                target="_blank"
                rel="noopener noreferrer"
                className="text-champagne-400 underline-offset-4 hover:underline"
              >
                gegevensbeschermingsautoriteit.be
              </a>
              ). Stuur uw verzoek naar{" "}
              <a
                href={siteConfig.contact.emailHref}
                className="text-champagne-400 underline-offset-4 hover:underline"
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </section>
        </div>

        <Link
          href="/"
          className="mt-14 inline-block rounded-full border border-champagne-500/60 px-8 py-3 text-sm tracking-wide text-champagne-400 transition-all duration-300 hover:bg-champagne-500 hover:text-charcoal-950"
        >
          ← Terug naar de homepage
        </Link>
      </main>
      <Footer />
    </>
  );
}
