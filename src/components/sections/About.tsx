"use client";

import {
  aboutHighlights,
  professionalSummary,
} from "@/data/portfolio";
import { Card } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Code2, Layers, Rocket, Zap } from "lucide-react";

const iconMap = {
  "Full-Stack Mindset": Code2,
  "API & Data Integration": Layers,
  "Performance & Scale": Zap,
  "Real-World Products": Rocket,
};

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            label="About"
            title="Engineering products that scale"
            description="From architecture to deployment — I build systems that last."
          />
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="left">
            <div className="space-y-6">
              {professionalSummary.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-lg leading-relaxed text-gray-600 dark:text-gray-400"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((item, i) => {
              const Icon =
                iconMap[item.title as keyof typeof iconMap] ?? Code2;
              return (
                <FadeIn key={item.title} delay={i * 0.1} direction="right">
                  <Card className="h-full">
                    <div className="mb-4 inline-flex rounded-xl bg-brand-500/10 p-3 text-brand-600 dark:text-brand-400">
                      <Icon size={22} />
                    </div>
                    <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
