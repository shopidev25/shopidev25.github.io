import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-200/80 bg-white/60 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/5",
        hover &&
          "transition-all duration-300 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/5 dark:hover:border-brand-400/20",
        className
      )}
    >
      {children}
    </div>
  );
}
