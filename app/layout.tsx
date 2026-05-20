import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import { site } from "@/lib/content/portfolio";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  keywords: [
    "sports marketing",
    "brand events",
    "Adidas marketing",
    "The University of Economics and Law graduate",
    "account management",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${site.name} — ${site.title}`,
    description: site.tagline,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description: site.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F5F2" },
    { media: "(prefers-color-scheme: dark)", color: "#0E0E0F" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  description: site.tagline,
  email: site.email,
  url: "https://leahoang.vn",
  sameAs: [site.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
