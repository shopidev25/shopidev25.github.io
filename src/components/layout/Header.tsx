"use client";

import { candidate, navLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-gray-200/50 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-gray-900/80"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {candidate.name.split(" ")[0]}
          <span className="text-brand-600 dark:text-brand-400">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-brand-600 dark:text-gray-300 dark:hover:text-brand-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a
            href="#contact"
            className="hidden rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-500 sm:inline-flex"
          >
            Hire Me
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-gray-600 md:hidden dark:text-gray-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-4 md:hidden dark:border-white/10 dark:bg-gray-900">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-gray-700 dark:text-gray-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-medium text-white"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
