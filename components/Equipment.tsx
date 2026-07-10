import FadeIn from "@/components/motion/FadeIn";
import SectionHeading from "@/components/SectionHeading";

type EquipmentItem = {
  name: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
};

const iconClass = "h-10 w-10 stroke-champagne-400";

const equipment: EquipmentItem[] = [
  {
    name: "Uplighters",
    subtitle: "Sfeerverlichting",
    description:
      "Draadloze LED-uplighters die uw feest in elke gewenste kleur baden. Van warm champagne-goud tot diep nachtblauw — de sfeer bepaalt u zelf.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.2" className={iconClass} aria-hidden="true">
        <path d="M9 18h6M10 21h4M12 3a6 6 0 0 1 6 6c0 2.5-1.5 4-2.5 5.5-.5.75-.5 1.5-.5 1.5h-6s0-.75-.5-1.5C7.5 13 6 11.5 6 9a6 6 0 0 1 6-6Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Statafels",
    subtitle: "High-top tafels",
    description:
      "Strakke statafels die uitnodigen tot netwerken en gezellig samenzijn. Optioneel afgewerkt met stretchhoezen in cream of charcoal.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.2" className={iconClass} aria-hidden="true">
        <ellipse cx="12" cy="5" rx="8" ry="2" strokeLinecap="round" />
        <path d="M12 7v13M8 20h8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Barkrukken",
    subtitle: "Comfortabel & stijlvol",
    description:
      "Elegante barkrukken die perfect aansluiten bij onze statafels. Comfort voor uw gasten, klasse voor uw evenement.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.2" className={iconClass} aria-hidden="true">
        <path d="M8 6h8M8 6l-2 15M16 6l2 15M7 13h10M12 6v4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Opklapbare stoelen",
    subtitle: "Flexibel in aantal",
    description:
      "Kwalitatieve opklapbare stoelen, snel geplaatst en netjes gestapeld. Ideaal voor recepties, quizavonden en zittende diners.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.2" className={iconClass} aria-hidden="true">
        <path d="M7 3h10M7 3l3 9M17 3l-3 9M10 12h4M10 12l-4 9M14 12l4 9M8 17h8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Equipment() {
  return (
    <section
      id="zaalmateriaal"
      aria-labelledby="zaalmateriaal-titel"
      className="relative bg-charcoal-950 py-24 sm:py-32"
    >
      {/* Subtiele gouden gloed bovenaan de sectie */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne-500/40 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Zaalmateriaal"
          title="Premium materiaal, tot in het kleinste detail"
          intro="Bar-B biedt méér dan vier muren. Ons hoogwaardig zaalmateriaal geeft uw evenement die verfijnde, professionele uitstraling — zonder externe verhuurders."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {equipment.map((item, index) => (
            <FadeIn key={item.name} delay={index * 0.1}>
              <article className="group flex h-full flex-col rounded-2xl border border-champagne-500/10 bg-gradient-to-b from-charcoal-800/80 to-charcoal-900/40 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-champagne-500/40 hover:shadow-[0_20px_50px_-20px_rgba(201,169,106,0.25)]">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-champagne-500/25 bg-charcoal-950/60 transition-colors duration-500 group-hover:border-champagne-500/60">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl text-cream-50">{item.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-champagne-500">
                  {item.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-cream-300">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Subtiele charter-notitie */}
        <FadeIn delay={0.3}>
          <p className="mx-auto mt-14 max-w-2xl text-center text-sm italic leading-relaxed text-cream-400">
            Al ons zaalmateriaal kan mee gecharterd worden bij de huur van de
            zaal — één aanspreekpunt, één zorgeloos geheel. Vraag ernaar bij uw
            aanvraag.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
