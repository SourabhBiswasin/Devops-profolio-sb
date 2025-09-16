import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sourabh Biswas - Devops Engineer",
  description:
    "Portfolio of Sourabh Biswas, a passionate Devops Engineer specializing in DevOps tools like Terraform (IaC), AWS, Azure, Jenkins, Gitlab, Github Actions, Docker, Kubernetes, ArgoCD, EFK, Grafana & Promethus.",
  keywords:
    "Sourabh Biswas, Devops Engineer, Terraform, AWS, Azure, Jenkins, Github Actions, Gitlab, Docker, Kubernetes, ArgoCD, EFK, Grafana, Promethus",
  authors: [{ name: "Sourabh Biswas" }],
  creator: "Sourabh Biswas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devopswithsourabh.gitbook.io/home/",
    title: "Sourabh Biswas - Devops Engineer",
    description:
      "Portfolio of Sourabh Biswas, a passionate Devops Engineer specializing in DevOps tools like Terraform (IaC), AWS, Azure, Jenkins, Gitlab, Github Actions, Docker, Kubernetes, ArgoCD, EFK, Grafana & Promethus.",
    siteName: "Sourabh Biswas Devops Engineer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourabh Biswas - Devops Engineer",
    description:
      "Portfolio of Sourabh Biswas, a passionate Devops Engineer specializing in DevOps tools like Terraform (IaC), AWS, Azure, Jenkins, Gitlab, Github Actions, Docker, Kubernetes, ArgoCD, EFK, Grafana & Promethus.",
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
