import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://fayyad-cyber-vert.vercel.app";

const siteTitle =
  "Fayyad Dahweesh | IT Support, Microsoft 365 & Cybersecurity";

const siteDescription =
  "Portfolio of Fayyad Dahweesh, an IT Support and Technical Support professional with hands-on experience in Microsoft 365, Entra ID, Intune, Microsoft Defender, Active Directory, SIEM, SOC investigation, and cybersecurity projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s | Fayyad Dahweesh",
  },

  description: siteDescription,

  applicationName: "Fayyad Dahweesh Portfolio",

  authors: [
    {
      name: "Fayyad Dahweesh",
      url: siteUrl,
    },
  ],

  creator: "Fayyad Dahweesh",
  publisher: "Fayyad Dahweesh",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Fayyad Dahweesh Portfolio",
    title: siteTitle,
    description: siteDescription,
  },

  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-cyan-400 px-4 py-3 font-semibold text-black shadow-lg transition-transform focus:translate-y-0"
        >
          Skip to main content
        </a>

        {children}
      </body>
    </html>
  );
}