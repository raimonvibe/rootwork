import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const siteDescription =
  "Practical, compassionate information for people navigating the world of work with strength, self-awareness, and trusted guidance.";

function getMetadataBase(): URL {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL);
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL("http://localhost:3000");
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "Rootwork — Supportive Employment Information",
    template: "%s | Rootwork",
  },
  description: siteDescription,
  applicationName: "Rootwork",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "Rootwork",
    statusBarStyle: "default",
  },
  openGraph: {
    title: "Rootwork",
    description: siteDescription,
    type: "website",
    siteName: "Rootwork",
    locale: "en_US",
    images: [
      {
        url: "/social.png",
        width: 341,
        height: 350,
        alt: "Rootwork — supportive employment information",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rootwork",
    description: siteDescription,
    images: ["/social.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1a2e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${plusJakarta.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
