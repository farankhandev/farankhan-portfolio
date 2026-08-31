import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://faran-khan-portfolio.vercel.app"),

  title: "Faran Khan | AI Engineer",

  description:
    "Faran Khan is an aspiring AI Engineer focused on artificial intelligence, machine learning, Python, and building practical AI solutions.",

  keywords: [
    "Faran Khan",
    "AI Engineer",
    "Artificial Intelligence",
    "Machine Learning",
    "Python",
    "Scikit-learn",
    "AI Projects",
  ],

  authors: [
    {
      name: "Faran Khan",
    },
  ],

  creator: "Faran Khan",

  openGraph: {
    title: "Faran Khan | AI Engineer",

    description:
      "AI Engineer focused on artificial intelligence, machine learning, Python, and practical AI solutions.",

    url: "https://faran-khan-portfolio.vercel.app",

    type: "website",

    siteName: "Faran Khan Portfolio",
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
    <html lang="en">
      <body className="bg-[#111] text-white antialiased">
        {children}
      </body>

      <GoogleAnalytics gaId="G-V6NK7BN0SW" />
    </html>
  );
}