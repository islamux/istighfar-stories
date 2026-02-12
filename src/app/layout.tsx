import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { amiri, cairo } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Istigfar-Stories | قصص المستغفرين",
  description: "A bilingual Islamic stories web application showcasing the power of seeking forgiveness (istighfar) in Muslim lives",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${amiri.variable} ${cairo.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
