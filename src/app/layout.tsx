import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/reset.scss";
import "@/styles/globals.scss";
import Nav from "@/components/Nav";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme">
          <Nav/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
