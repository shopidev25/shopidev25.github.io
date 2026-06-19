"use client";

import { candidate } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Github, Loader2, Mail, Send } from "lucide-react";
import { type FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send message"
      );
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            label="Contact"
            title="Let's build scalable products together"
            description="Have a project in mind? I'd love to hear about it."
          />
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-5">
          <FadeIn direction="left" className="lg:col-span-2">
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                Whether you need a full-stack engineer for your next product,
                help scaling an existing system, or a technical partner for a
                greenfield project — let&apos;s talk.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${candidate.email}`}
                  className="flex items-center gap-4 rounded-2xl border border-gray-200/80 bg-white/60 p-4 backdrop-blur-xl transition-all hover:border-brand-500/30 dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-400/20"
                >
                  <div className="rounded-xl bg-brand-500/10 p-3 text-brand-600 dark:text-brand-400">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {candidate.email}
                    </p>
                  </div>
                </a>

                <a
                  href={candidate.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-gray-200/80 bg-white/60 p-4 backdrop-blur-xl transition-all hover:border-brand-500/30 dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-400/20"
                >
                  <div className="rounded-xl bg-brand-500/10 p-3 text-brand-600 dark:text-brand-400">
                    <Github size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">GitHub</p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {candidate.github.replace("https://", "")}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-gray-200/80 bg-white/60 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:p-8"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
                />
              </div>

              {status === "success" && (
                <p className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700 dark:bg-green-500/10 dark:text-green-400">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-500/10 dark:text-red-400">
                  {errorMessage}
                </p>
              )}

              <div className="mt-6">
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
