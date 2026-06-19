"use client";

import { candidate } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { motion } from "framer-motion";
import { ArrowDown, Github, Mail, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <FadeIn>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-700 dark:text-brand-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available for new opportunities
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
              {candidate.name}
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-4 text-2xl font-semibold text-gray-700 dark:text-gray-200 sm:text-3xl">
            {candidate.role}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400 sm:text-xl">
            {candidate.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1.5">
              <MapPin size={16} />
              {candidate.location}
            </span>
            <a
              href={`mailto:${candidate.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-brand-600 dark:hover:text-brand-400"
            >
              <Mail size={16} />
              {candidate.email}
            </a>
            <a
              href={candidate.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-brand-600 dark:hover:text-brand-400"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects" size="lg">
              View Projects
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Contact Me
            </Button>
          </div>
        </FadeIn>

        <motion.div
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="flex flex-col items-center gap-2 text-gray-400 transition-colors hover:text-brand-500"
          >
            <span className="text-xs font-medium uppercase tracking-widest">
              Scroll
            </span>
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
