"use client";

import { motion, useReducedMotion } from "framer-motion";

const luxuryEase = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-label="Bar-B — exclusieve feestzaal in Tongeren-Borgloon"
      className="relative flex min-h-svh items-center justify-center overflow-hidden"
    >
      {/*
        Immersieve achtergrond — vervang dit blok door een sfeervideo of
        hero-foto van de zaal zodra beschikbaar:

        <video autoPlay muted loop playsInline poster="/images/hero-poster.jpg"
               className="absolute inset-0 h-full w-full object-cover">
          <source src="/videos/bar-b-sfeer.mp4" type="video/mp4" />
        </video>

        De overlay-lagen hieronder blijven bovenop de video staan.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#2a2825_0%,_#161513_45%,_#0e0d0b_100%)]"
      />
      {/* Warm gouden gloed van onderuit — imiteert sfeerverlichting */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_at_bottom,_rgba(201,169,106,0.16)_0%,_transparent_65%)]"
      />
      {/* Luxe donkere overlay + vignet */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-charcoal-950/40 [box-shadow:inset_0_0_180px_60px_rgba(14,13,11,0.9)]"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-32 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: luxuryEase }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-champagne-400 sm:text-sm"
        >
          Feestzaal · Tongeren-Borgloon · Haspengouw
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: reduceMotion ? 0 : 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: luxuryEase }}
          className="font-serif text-4xl leading-[1.1] text-cream-50 sm:text-6xl lg:text-7xl"
        >
          Waar uw feest een{" "}
          <span className="italic text-champagne-400">exclusieve</span>{" "}
          beleving wordt
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65, ease: luxuryEase }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-cream-300 sm:text-lg"
        >
          Bar-B is de meest sfeervolle privé-feestzaal tussen Tongeren en
          Borgloon. Eén locatie, eindeloos veel mogelijkheden — van intieme
          recepties tot bruisende fuiven, volledig naar uw wens ingericht.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85, ease: luxuryEase }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#aanvraag"
            className="group relative w-full overflow-hidden rounded-full bg-champagne-500 px-10 py-4 text-center font-medium tracking-wide text-charcoal-950 transition-all duration-500 hover:bg-champagne-400 hover:shadow-[0_0_40px_rgba(201,169,106,0.35)] sm:w-auto"
          >
            Vraag uw datum aan
          </a>
          <a
            href="#evenementen"
            className="w-full rounded-full border border-cream-100/25 px-10 py-4 text-center tracking-wide text-cream-100 transition-all duration-500 hover:border-champagne-500/60 hover:text-champagne-400 sm:w-auto"
          >
            Ontdek de zaal
          </a>
        </motion.div>
      </div>

      {/* Subtiele scroll-indicator */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          className="h-12 w-px bg-gradient-to-b from-champagne-500/70 to-transparent"
        />
      </motion.div>
    </section>
  );
}
