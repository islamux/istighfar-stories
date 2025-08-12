import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PWARegister from "@/components/PWARegister";
import InstallPWA from "@/components/InstallPWA";
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
  title: "Istighfar Stories - Islamic Stories Collection",
  description: "A collection of inspiring Islamic stories about istighfar, repentance, and spiritual growth",
  applicationName: "Istighfar Stories",
  authors: [{ name: "Istighfar Stories Team" }],
  generator: "Next.js",
  keywords: ["istighfar", "islamic stories", "repentance", "spiritual growth", "islam", "muslim"],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Istighfar Stories",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Istighfar Stories",
    title: "Istighfar Stories - Islamic Stories Collection",
    description: "A collection of inspiring Islamic stories about istighfar, repentance, and spiritual growth",
    url: "https://istighfar-stories.com",
  },
  twitter: {
    card: "summary",
    title: "Istighfar Stories",
    description: "A collection of inspiring Islamic stories about istighfar, repentance, and spiritual growth",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a5f3f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PWARegister />
        <InstallPWA />
        {children}
      </body>
    </html>
  );
}
