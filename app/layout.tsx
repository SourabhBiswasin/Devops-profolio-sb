import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jatin Kumar - Full Stack Developer",
  description:
    "Portfolio of Jatin Kumar, a passionate full stack developer specializing in React, Node.js, and modern web technologies.",
  keywords:
    "Jatin Kumar, Full Stack Developer, React, Node.js, JavaScript, TypeScript, Web Development",
  authors: [{ name: "Jatin Kumar" }],
  creator: "Jatin Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jatinkumar.dev",
    title: "Jatin Kumar - Full Stack Developer",
    description:
      "Portfolio of Jatin Kumar, a passionate full stack developer specializing in React, Node.js, and modern web technologies.",
    siteName: "Jatin Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jatin Kumar - Full Stack Developer",
    description:
      "Portfolio of Jatin Kumar, a passionate full stack developer specializing in React, Node.js, and modern web technologies.",
    creator: "@jatinkumar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
