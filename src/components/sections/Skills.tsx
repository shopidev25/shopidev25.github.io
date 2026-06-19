"use client";

import { skillCategories } from "@/data/portfolio";
import { Card } from "@/components/ui/SectionHeading";
import { FadeIn, staggerContainer, staggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import {
  Cloud,
  Database,
  Monitor,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Server,
  Database,
  Cloud,
  Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="bg-gray-50 py-24 dark:bg-gray-950/50 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            label="Skills"
            title="Technical expertise"
            description="A comprehensive toolkit for building modern, scalable applications."
          />
        </FadeIn>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon] ?? Wrench;
            return (
              <motion.div key={category.title} variants={staggerItem}>
                <Card className="h-full">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-xl bg-brand-500/10 p-2.5 text-brand-600 dark:text-brand-400">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 dark:bg-white/10 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
