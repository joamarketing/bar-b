import FadeIn from "@/components/motion/FadeIn";
import { siteConfig } from "@/lib/site-config";

const stats = [
  { value: "1", label: "Exclusieve locatie" },
  { value: "4+", label: "Types evenementen" },
  { value: "100%", label: "Op maat ingericht" },
];

export default function About() {
  return (
    <section
      id="over-ons"
      aria-labelledby="over-ons-titel"
      className="relative overflow-hidden bg-charcoal-900 py-24 sm:py-32"
    >
      {/* Decoratieve gouden gloed */}
      <div
        aria-hidden="true"
        className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-champagne-500/[0.05] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <FadeIn>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-champagne-500">
            Geworteld in Haspengouw
          </p>
          <h2
            id="over-ons-titel"
            className="gold-rule font-serif text-3xl leading-tight text-cream-50 sm:text-4xl lg:text-5xl"
          >
            Uw feestzaal tussen Tongeren en Borgloon
          </h2>

          <div className="mt-8 space-y-5 leading-relaxed text-cream-300">
            <p>
              Tussen de eeuwenoude straten van <strong className="font-medium text-cream-100">Tongeren</strong>,
              de oudste stad van België, en de bloesemrijke boomgaarden van{" "}
              <strong className="font-medium text-cream-100">Borgloon</strong> ligt
              Bar-B: een feestzaal die de warme gastvrijheid van{" "}
              <strong className="font-medium text-cream-100">Haspengouw</strong> koppelt
              aan een verfijnde, eigentijdse uitstraling.
            </p>
            <p>
              Wie in Tongeren-Borgloon en omstreken een zaal zoekt voor een
              fuif, receptie, beurs of verjaardagsfeest, vindt bij Bar-B een
              locatie die centraal en vlot bereikbaar ligt — voor gasten uit
              Sint-Truiden, Bilzen, Heers, Wellen en de hele Haspengouwse
              regio.
            </p>
            <p>
              Wij geloven dat een feest pas écht slaagt wanneer de locatie
              klopt tot in de details. Daarom krijgt u bij Bar-B geen
              standaardzaal, maar een exclusief kader dat wij samen met u
              inrichten: van de sfeerverlichting tot de laatste barkruk.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col justify-center gap-10">
          {/* Beeldplaceholder van de zaal */}
          <FadeIn delay={0.15}>
            <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-champagne-500/15">
              {/*
                Vervang deze placeholder door een sfeerfoto van de zaal:
                <Image src="/images/zaal.jpg" alt="Sfeerbeeld van feestzaal Bar-B in Tongeren-Borgloon" fill className="object-cover" />
              */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(201,169,106,0.25)_0%,_#1e1d1a_55%,_#161513_100%)]" />
              <figcaption className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-6xl italic text-champagne-500/40 sm:text-7xl">
                  Bar-B
                </span>
              </figcaption>
            </figure>
          </FadeIn>

          {/* Kerncijfers */}
          <FadeIn delay={0.3}>
            <dl className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-champagne-500/10 bg-charcoal-800/50 px-4 py-6 text-center"
                >
                  <dt className="order-2 mt-2 block text-xs uppercase tracking-wider text-cream-400">
                    {stat.label}
                  </dt>
                  <dd className="font-serif text-3xl text-champagne-400">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>

          {/* Werkgebied — extra lokale relevantie */}
          <FadeIn delay={0.4}>
            <p className="text-sm leading-relaxed text-cream-400">
              Actief in:{" "}
              {siteConfig.areaServed.map((place, index) => (
                <span key={place}>
                  <span className="text-champagne-400">{place}</span>
                  {index < siteConfig.areaServed.length - 1 ? " · " : ""}
                </span>
              ))}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
