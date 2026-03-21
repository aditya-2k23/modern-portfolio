import type { Metadata } from "next";
import { Manrope, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { cn } from "@/lib/utils";

import { SplashScreen } from "@/components/ui/splash-screen";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aditya | Full Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Aditya, a B.Tech CSE student building high-performance full-stack web apps and AI-powered developer products.",
  metadataBase: new URL("https://aditya-modern-portfolio.vercel.app"),
  openGraph: {
    title: "Aditya | Full Stack Developer & AI Enthusiast",
    description:
      "Scalable web apps, AI workflows, and clean developer-first engineering.",
    url: "https://aditya-modern-portfolio.vercel.app",
    siteName: "Aditya Portfolio",
    type: "website",
  },
  keywords: [
    "Aditya portfolio",
    "full stack developer",
    "Next.js developer",
    "AI enthusiast",
    "B.Tech CSE",
    "React portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", inter.variable)}>
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SplashScreen />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
