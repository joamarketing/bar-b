import FadeIn from "@/components/motion/FadeIn";
import InquiryForm from "@/components/InquiryForm";
import { siteConfig } from "@/lib/site-config";

export default function CTASection() {
  return (
    <section
      id="aanvraag"
      aria-labelledby="aanvraag-titel"
      className="relative overflow-hidden bg-charcoal-950 py-24 sm:py-32"
    >
      {/* Dramatische gouden gloed als afsluiter */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne-500/50 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-champagne-500/[0.07] blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <FadeIn>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-champagne-500">
              Reservatie voor zaal
            </p>
            <h2
              id="aanvraag-titel"
              className="gold-rule font-serif text-3xl leading-tight text-cream-50 sm:text-4xl lg:text-5xl"
            >
              Reserveer uw datum, voor iemand anders het doet
            </h2>
            <p className="mt-8 leading-relaxed text-cream-300">
              Onze agenda voor 2027 zit al goed vol! Populaire data in het
              weekend zijn snel volzet. Laat ons weten wanneer u wil vieren en
              wij bevestigen de beschikbaarheid binnen de 24u. Dien nu een
              aanvraag in via de chatknop rechtsonderaan!
            </p>

            <dl className="mt-10 space-y-4 text-cream-200">
              <div className="flex items-baseline gap-4">
                <dt className="w-24 shrink-0 text-xs uppercase tracking-widest text-cream-400">
                  E-mail
                </dt>
                <dd>
                  <a
                    href={siteConfig.contact.emailHref}
                    className="transition-colors hover:text-champagne-400"
                  >
                    {siteConfig.contact.email}
                  </a>
                </dd>
              </div>
              <div className="flex items-baseline gap-4">
                <dt className="w-24 shrink-0 text-xs uppercase tracking-widest text-cream-400">
                  Regio
                </dt>
                <dd>Tongeren-Borgloon, Limburg</dd>
              </div>
            </dl>
          </FadeIn>

          <FadeIn delay={0.15}>
            <InquiryForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
