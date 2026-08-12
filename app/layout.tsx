import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ashishkudu.com"),
  title: "Ashish Kudu | Mechanical Design Engineer",
  description:
    "Mechanical engineering portfolio focused on product design, manufacturing, maintenance engineering, and industrial problem solving.",
  alternates: { canonical: "https://ashishkudu.com" },
  openGraph: {
    title: "Ashish Kudu | Mechanical Design Engineer",
    description:
      "Interactive engineering portfolio featuring design, manufacturing, product development, and industrial problem solving.",
    url: "https://ashishkudu.com",
    siteName: "Ashish Kudu",
    type: "website"
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}