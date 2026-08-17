import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import ChatWidget from "@/components/ChatWidget";
import UsermavenAnalytics from "@/components/UsermavenAnalytics";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Sitefooter"
      className="border-t border-champagne-500/10 bg-charcoal-950"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Merk */}
          <div>
            <p className="font-serif text-3xl text-cream-50">
              Bar<span className="text-champagne-500">-</span>B
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream-400">
              Exclusieve feestzaal en evenementenlocatie in het hart van
              Haspengouw, tussen Tongeren en Borgloon.
            </p>
          </div>

          {/* Navigatie */}
          <nav aria-label="Footernavigatie">
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-champagne-500">
              Ontdek
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-cream-300">
              <li>
                <a href="#evenementen" className="transition-colors hover:text-champagne-400">
                  Evenementen
                </a>
              </li>
              <li>
                <a href="#zaalmateriaal" className="transition-colors hover:text-champagne-400">
                  Zaalmateriaal
                </a>
              </li>
              <li>
                <a href="#over-ons" className="transition-colors hover:text-champagne-400">
                  Over Bar-B
                </a>
              </li>
              <li>
                <a href="#aanvraag" className="transition-colors hover:text-champagne-400">
                  Vraag reservatie aan
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div id="contact">
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-champagne-500">
              Contact
            </h3>
            <address className="mt-5 space-y-3 text-sm not-italic text-cream-300">
              <p>
                Feestzaal Bar-B
                <br />
                {siteConfig.address.building}
                <br />
                {siteConfig.address.street}
                <br />
                {siteConfig.address.postalCode} Tongeren-Borgloon
              </p>
              <p>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="transition-colors hover:text-champagne-400"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p>
                <a
                  href={siteConfig.contact.emailHref}
                  className="transition-colors hover:text-champagne-400"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </address>
          </div>

          {/* Regio — lokale SEO in de footer */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-champagne-500">
              Onze regio
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-cream-400">
              Feestzaal voor {siteConfig.areaServed.slice(0, 6).join(", ")} en
              heel Haspengouw.
            </p>
            <div className="mt-5 flex gap-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bar-B op Facebook"
                className="text-cream-300 transition-colors hover:text-champagne-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.7-1.6h1.5V3.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.6H7.9V13h2.6v8h3Z" />
                </svg>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bar-B op Instagram"
                className="text-cream-300 transition-colors hover:text-champagne-400"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-champagne-500/10 pt-8 text-xs text-cream-400 sm:flex-row">
          <p>
            © {currentYear} {siteConfig.legalName}. Alle rechten voorbehouden.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy" className="transition-colors hover:text-champagne-400">
                Privacybeleid
              </Link>
            </li>
            <li>
              <Link href="/privacy#cookies" className="transition-colors hover:text-champagne-400">
                Cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <ChatWidget />
      <UsermavenAnalytics />
    </footer>
  );
}
