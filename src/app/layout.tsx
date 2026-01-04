import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tan Jian Jie | Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in AI/ML Systems, Real-Time Graphics, and Cloud Solutions. Final-year Computer Science student at DigiPen Institute of Technology.",
  keywords: [
    "Full-Stack Developer",
    "AI/ML",
    "RAG Systems",
    "React",
    "Python",
    "C++",
    "Singapore",
    "DigiPen",
    "Software Engineer",
  ],
  authors: [{ name: "Tan Jian Jie" }],
  creator: "Tan Jian Jie",
  openGraph: {
    type: "website",
    locale: "en_SG",
    title: "Tan Jian Jie | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in AI/ML Systems, Real-Time Graphics, and Cloud Solutions.",
    siteName: "Tan Jian Jie Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tan Jian Jie | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in AI/ML Systems, Real-Time Graphics, and Cloud Solutions.",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} antialiased bg-[#030014] text-white`}
      >
        {children}
        {/* Noise overlay for texture */}
        <div className="noise-overlay" />
      </body>
    </html>
  );
}
