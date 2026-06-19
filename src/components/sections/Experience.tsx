"use client";

import { experiences } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="bg-gray-50 py-24 dark:bg-gray-950/50 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            label="Experience"
            title="Professional journey"
            description="Building scalable systems and shipping products that matter."
          />
        </FadeIn>

        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-brand-500/50 via-brand-500/20 to-transparent md:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.id} delay={i * 0.1}>
                <div className="relative md:pl-20">
                  <div className="absolute left-6 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-500 bg-white dark:bg-gray-900 md:block" />

                  <div className="rounded-2xl border border-gray-200/80 bg-white/60 px-6 py-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:px-8">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.company}{" "}
                        <span className="font-normal text-gray-500 dark:text-gray-400">
                          | {exp.workMode}
                        </span>
                      </h3>

                      <div className="flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-400 sm:flex-row sm:items-center sm:gap-6 sm:text-right">
                        <span className="font-medium tabular-nums">
                          {exp.period}
                        </span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
