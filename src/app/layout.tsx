import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { candidate } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${candidate.name} | ${candidate.role}`,
    template: `%s | ${candidate.name}`,
  },
  description: `${candidate.tagline}. Full-stack developer specializing in React, Next.js, Node.js, and cloud deployment.`,
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
    candidate.name,
  ],
  authors: [{ name: candidate.name, url: candidate.website }],
  creator: candidate.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: candidate.website,
    title: `${candidate.name} | ${candidate.role}`,
    description: candidate.tagline,
    siteName: candidate.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${candidate.name} | ${candidate.role}`,
    description: candidate.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans`}
      >
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
