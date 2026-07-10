import FadeIn from "@/components/motion/FadeIn";

type SectionHeadingProps = {
  /** Klein goudkleurig kicker-label boven de titel */
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <FadeIn
      className={`max-w-3xl ${centered ? "mx-auto text-center" : "text-left"}`}
    >
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-champagne-500">
        {eyebrow}
      </p>
      <h2
        className={`gold-rule font-serif text-3xl leading-tight text-cream-50 sm:text-4xl lg:text-5xl ${
          centered ? "gold-rule-center" : ""
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className="mt-6 text-base leading-relaxed text-cream-300 sm:text-lg">
          {intro}
        </p>
      )}
    </FadeIn>
  );
}
