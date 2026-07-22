"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

const eventTypes = [
  "Fuif of feest",
  "Receptie",
  "Beurs of corporate event",
  "Quizavond",
  "Verjaardagsfeest",
  "Andere",
];

const inputClass =
  "w-full rounded-lg border border-champagne-500/20 bg-charcoal-950/70 px-4 py-3 text-cream-100 placeholder:text-cream-400/50 transition-colors duration-300 focus:border-champagne-500/70 focus:outline-none";

/**
 * Aanvraagformulier zonder backend-afhankelijkheid: bij verzenden wordt een
 * voorgevuld e-mailvenster geopend naar het zaaladres. Koppel dit later
 * eenvoudig aan een API-route of formulierdienst (bv. /api/aanvraag).
 */
export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const subject = `Aanvraag ${data.get("eventType")} — ${data.get("date") || "datum in overleg"}`;
    const body = [
      `Naam: ${data.get("name")}`,
      `E-mail: ${data.get("email")}`,
      `Telefoon: ${data.get("phone") || "-"}`,
      `Type evenement: ${data.get("eventType")}`,
      `Gewenste datum: ${data.get("date") || "in overleg"}`,
      `Aantal gasten: ${data.get("guests") || "-"}`,
      "",
      "Bericht:",
      `${data.get("message") || "-"}`,
    ].join("\n");

    window.location.href = `${siteConfig.contact.emailHref}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  }

  return (
    <div id="aanvraagformulier">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="bevestiging"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-champagne-500/30 bg-charcoal-800/60 p-10 text-center"
            role="status"
          >
            <p className="font-serif text-2xl text-champagne-400">
              Dank u wel!
            </p>
            <p className="mt-4 leading-relaxed text-cream-300">
              Uw e-mailprogramma opent zich met uw aanvraag. Verstuur de
              e-mail en wij nemen zo snel mogelijk contact met u op om de
              beschikbaarheid van uw datum te bevestigen.
            </p>
            <p className="mt-6 text-sm text-cream-400">
              Geen e-mail geopend? Mail ons rechtstreeks op{" "}
              <a
                href={siteConfig.contact.emailHref}
                className="text-champagne-400 underline-offset-4 hover:underline"
              >
                {siteConfig.contact.email}
              </a>{" "}
              of bel{" "}
              <a
                href={siteConfig.contact.phoneHref}
                className="text-champagne-400 underline-offset-4 hover:underline"
              >
                {siteConfig.contact.phone}
              </a>
              .
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="formulier"
            onSubmit={handleSubmit}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
            aria-label="Aanvraagformulier zaalverhuur"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-cream-200">
                Naam <span className="text-champagne-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Uw volledige naam"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-cream-200">
                E-mailadres <span className="text-champagne-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="uw@email.be"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm text-cream-200">
                Telefoonnummer
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+32 ..."
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="eventType" className="mb-2 block text-sm text-cream-200">
                Type evenement <span className="text-champagne-500">*</span>
              </label>
              <select id="eventType" name="eventType" required className={inputClass} defaultValue="">
                <option value="" disabled>
                  Kies een type
                </option>
                {eventTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="date" className="mb-2 block text-sm text-cream-200">
                Gewenste datum
              </label>
              <input id="date" name="date" type="date" className={inputClass} />
            </div>

            <div>
              <label htmlFor="guests" className="mb-2 block text-sm text-cream-200">
                Aantal gasten (schatting)
              </label>
              <input
                id="guests"
                name="guests"
                type="number"
                min="1"
                placeholder="bv. 80"
                className={inputClass}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm text-cream-200">
                Uw bericht
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Vertel ons kort iets over uw evenement — gewenst zaalmateriaal, timing, speciale wensen…"
                className={inputClass}
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full rounded-full bg-champagne-500 px-10 py-4 font-medium tracking-wide text-charcoal-950 transition-all duration-500 hover:bg-champagne-400 hover:shadow-[0_0_40px_rgba(201,169,106,0.35)] sm:w-auto"
              >
                Verstuur aanvraag
              </button>
              <p className="mt-4 text-xs leading-relaxed text-cream-400">
                Wij behandelen uw gegevens vertrouwelijk en gebruiken ze enkel
                om uw aanvraag te beantwoorden.
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
