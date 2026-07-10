import FadeIn from "@/components/motion/FadeIn";
import SectionHeading from "@/components/SectionHeading";

type UseCase = {
  title: string;
  description: string;
  highlights: string[];
  /** Decoratief serif-monogram op de kaart */
  monogram: string;
};

const useCases: UseCase[] = [
  {
    title: "Fuiven & Feesten",
    monogram: "F",
    description:
      "Van bruisende clubavonden tot privéfeesten die nazinderen: Bar-B transformeert moeiteloos tot een volwaardige feestlocatie met sfeervolle verlichting en ruimte om te dansen tot in de vroege uurtjes.",
    highlights: ["Privé clubavonden", "Themafeesten", "Afterparty's"],
  },
  {
    title: "Recepties",
    monogram: "R",
    description:
      "Elegante recepties vragen om een elegant kader. Met warme sfeerverlichting, stijlvolle statafels en een verfijnde inrichting ontvangt u uw gasten zoals het hoort — met klasse.",
    highlights: ["Huwelijksrecepties", "Netwerkmomenten", "Jubilea"],
  },
  {
    title: "Beurzen & Quizzen",
    monogram: "B",
    description:
      "Een flexibele indeling maakt van Bar-B de ideale uitvalsbasis voor beurzen, bedrijfsevents, productvoorstellingen en quizavonden. Professioneel overdag, sfeervol 's avonds.",
    highlights: ["Corporate events", "Lokale beurzen", "Quizavonden"],
  },
  {
    title: "Verjaardagsfeestjes",
    monogram: "V",
    description:
      "Een mijlpaal verdient meer dan een gewone zaal. Vier uw 18de, 30ste of 50ste verjaardag in een exclusief kader dat u volledig naar eigen smaak inricht — intiem of uitbundig.",
    highlights: ["Sweet sixteen", "Kroonjaren", "Familiefeesten"],
  },
];

export default function UseCases() {
  return (
    <section
      id="evenementen"
      aria-labelledby="evenementen-titel"
      className="relative bg-charcoal-900 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Eén zaal, elk moment"
          title="Voor elk evenement de perfecte setting"
          intro="Welke gelegenheid u ook viert, Bar-B past zich aan. Onze zaal in het hart van Tongeren-Borgloon wordt volledig op maat van uw evenement ingericht."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {useCases.map((useCase, index) => (
            <FadeIn key={useCase.title} delay={index * 0.12}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-champagne-500/10 bg-charcoal-800/60 p-8 transition-all duration-500 hover:border-champagne-500/40 hover:bg-charcoal-800 sm:p-10">
                {/* Decoratief monogram */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-4 -top-8 font-serif text-[10rem] leading-none text-champagne-500/[0.06] transition-colors duration-700 group-hover:text-champagne-500/[0.12]"
                >
                  {useCase.monogram}
                </span>

                <h3 className="relative font-serif text-2xl text-cream-50 sm:text-3xl">
                  {useCase.title}
                </h3>
                <p className="relative mt-4 flex-1 leading-relaxed text-cream-300">
                  {useCase.description}
                </p>
                <ul className="relative mt-6 flex flex-wrap gap-2">
                  {useCase.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-full border border-champagne-500/25 px-4 py-1.5 text-xs tracking-wide text-champagne-400"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
