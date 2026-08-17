import Script from "next/script";

/**
 * Usermaven bezoekersanalyse.
 *
 * Geconfigureerd in 'strict' privacymodus: privacyvriendelijke,
 * cookieloze meting van paginaweergaven en interacties. De tracker wordt
 * na de eerste paginaweergave geladen (afterInteractive) zodat de site
 * snel blijft.
 *
 * NB: dat deze meting plaatsvindt, staat vermeld in het privacybeleid
 * (/privacy). Bewust verbergen of onvindbaar maken van deze scripts doen
 * we niet — dat zou in strijd zijn met de transparantieplicht (GDPR).
 */
export default function UsermavenAnalytics() {
  return (
    <>
      <Script id="um-init" strategy="afterInteractive">
        {`window.usermaven = window.usermaven || (function () { (window.usermavenQ = window.usermavenQ || []).push(arguments); });`}
      </Script>
      <Script
        id="um-tracker"
        src="https://t.usermaven.com/lib.js"
        strategy="afterInteractive"
        data-tracking-host="https://events.usermaven.com"
        data-key="UMaoRUjJi9"
        data-autocapture="true"
        data-form-tracking="all"
        data-privacy-policy="strict"
      />
    </>
  );
}
