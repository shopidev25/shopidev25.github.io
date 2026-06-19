"use client";

import { projects } from "@/data/portfolio";
import { Card } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { ArrowUpRight, BarChart3, Layers, Target } from "lucide-react";
import { useState } from "react";

export function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            label="Projects"
            title="Selected work"
            description="Full-stack applications built to solve real business problems."
          />
        </FadeIn>

        <div className="mb-12 grid gap-6 lg:grid-cols-3">
          {featured.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1}>
              <ProjectCard
                project={project}
                expanded={expanded === project.id}
                onToggle={() =>
                  setExpanded(expanded === project.id ? null : project.id)
                }
                featured
              />
            </FadeIn>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1}>
              <ProjectCard
                project={project}
                expanded={expanded === project.id}
                onToggle={() =>
                  setExpanded(expanded === project.id ? null : project.id)
                }
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[0];
  expanded: boolean;
  onToggle: () => void;
  featured?: boolean;
}

function ProjectCard({
  project,
  expanded,
  onToggle,
  featured,
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "flex h-full flex-col",
        featured && "lg:col-span-1"
      )}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <button
          onClick={onToggle}
          aria-expanded={expanded}
          aria-label={`${expanded ? "Collapse" : "Expand"} ${project.title} details`}
          className="shrink-0 rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-brand-600 dark:hover:bg-white/10 dark:hover:text-brand-400"
        >
          <ArrowUpRight
            size={20}
            className={cn(
              "transition-transform duration-200",
              expanded && "rotate-90"
            )}
          />
        </button>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-brand-500/10 px-2.5 py-1 text-xs font-medium text-brand-700 dark:text-brand-300"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-500 dark:bg-white/10">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {project.problem}
      </p>

      <div className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400">
        <BarChart3 size={16} />
        <span className="line-clamp-2">{project.impact}</span>
      </div>

      {expanded && (
        <div className="mt-6 space-y-4 border-t border-gray-200 pt-6 dark:border-white/10">
          <DetailBlock icon={Target} label="Solution" text={project.solution} />
          <DetailBlock
            icon={Layers}
            label="Architecture"
            text={project.architecture}
          />
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Full Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-gray-100 px-2.5 py-1 text-xs text-gray-700 dark:bg-white/10 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}

function DetailBlock({
  icon: Icon,
  label,
  text,
}: {
  icon: typeof Target;
  label: string;
  text: string;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center gap-2">
        <Icon size={14} className="text-brand-600 dark:text-brand-400" />
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          {label}
        </p>
      </div>
      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {text}
      </p>
    </div>
  );
}
