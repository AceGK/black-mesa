import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "@/styles/reset.scss";
import "@/styles/globals.scss";
import Nav from "@/components/Nav";
import { ThemeProvider } from "next-themes";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // Add weights you need
  display: "swap",
});

export const metadata = {
  title: "Black Mesa",
  description: "Welcome to Black Mesa Research Facility",
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
          <Nav/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
