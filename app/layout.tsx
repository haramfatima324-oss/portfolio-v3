import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-serif" });
export const metadata: Metadata = {
  metadataBase: new URL("https://abdul-moeed.online"),
  title: "Abdul Moeed — Web Developer",
  description: "Web developer creating modern, responsive and user-friendly websites.",
  openGraph: { title: "Abdul Moeed — Web Developer", description: "Modern, responsive and user-friendly websites.", type: "website", url: "https://abdul-moeed.online/" },
};
export const viewport: Viewport = { themeColor: "#0a0a0b" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${sans.variable} ${serif.variable}`}><body>{children}</body></html>;
}
