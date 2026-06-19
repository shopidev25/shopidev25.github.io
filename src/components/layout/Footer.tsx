import { candidate } from "@/data/portfolio";
import { Github, Mail, MapPin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              {candidate.name}
            </p>
            <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-gray-500 sm:justify-start">
              <MapPin size={14} />
              {candidate.location}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${candidate.email}`}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400"
              aria-label="Email"
            >
              <Mail size={18} />
              <span className="hidden sm:inline">{candidate.email}</span>
            </a>
            <a
              href={candidate.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400"
              aria-label="GitHub"
            >
              <Github size={18} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center dark:border-white/10">
          <p className="text-sm text-gray-500">
            &copy; {year} {candidate.name}. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
