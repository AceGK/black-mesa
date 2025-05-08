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
  description: "Welcome to the Black Mesa Research Facility. Science has never been so dangerous.",
  applicationName: "Black Mesa",
  keywords: ["Black Mesa", "Research", "Half-Life", "Science", "Gordon Freeman"],
  authors: [{ name: "Black Mesa", url: "https://blackmesa.example.com" }],
  creator: "Black Mesa Development Team",
  publisher: "Black Mesa",
  metadataBase: new URL("https://blackmesa.example.com"),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blackmesa.example.com",
    title: "Black Mesa Research Facility",
    description: "Top secret research into teleportation, Xen, and theoretical physics.",
    siteName: "Black Mesa",
    images: [
      {
        url: "/og-image.jpg", // or full URL if hosted elsewhere
        width: 1200,
        height: 630,
        alt: "Black Mesa Research Facility",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Black Mesa Research Facility",
    description: "The frontier of science... and danger.",
    creator: "@blackmesaofficial",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon-light.svg", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.svg", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/apple-touch-icon.png",
  },

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0d" },
  ],

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
