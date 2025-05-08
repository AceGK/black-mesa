import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "@/styles/reset.scss";
import "@/styles/globals.scss";
import Nav from "@/components/Nav";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Black Mesa",
  description: "Pursuing radical advancement in quantum mechanics, dimensional field research, and defense-grade applied sciences.",
  applicationName: "Black Mesa",
  keywords: ["Black Mesa", "Research", "Half-Life", "Science", "Gordon Freeman"],
  authors: [{ name: "Black Mesa", url: "https://blackmesa.acekisch.com" }],
  creator: "Ace Kisch",
  publisher: "Ace Kisch",
  metadataBase: new URL("https://blackmesa.acekisch.com"),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blackmesa.acekisch.com",
    title: "Black Mesa Research Facility",
    description: "Pursuing radical advancement in quantum mechanics, dimensional field research, and defense-grade applied sciences.",
    siteName: "Black Mesa",
    images: [
      {
        url: "/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Black Mesa Research Facility",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Black Mesa Research Facility",
    description: "Pursuing radical advancement in quantum mechanics, dimensional field research, and defense-grade applied sciences.",
    creator: "@blackmesaofficial",
    images: ["/thumbnail.jpg"],
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sourceSans.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme">
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
