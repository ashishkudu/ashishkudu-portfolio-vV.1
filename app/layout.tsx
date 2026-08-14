import type { Metadata } from "next";
import "./globals.css";
import "./auv-background.css";

const siteUrl = "https://ashishkudu.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Ashish Kudu | Mechanical Engineer",
    template: "%s | Ashish Kudu",
  },

  description:
    "Ashish Kudu is a mechanical engineer focused on mechanical design, manufacturing, product development, maintenance, and industrial problem solving.",

  alternates: {
    canonical: siteUrl,
  },

  keywords: [
    "Ashish Kudu",
    "Ashish Kudu Mechanical Engineer",
    "Mechanical Engineer",
    "Mechanical Design Engineer",
    "Mechanical Design",
    "Manufacturing Engineer",
    "Product Development",
    "Design and Manufacturing",
  ],

  authors: [
    {
      name: "Ashish Kudu",
      url: siteUrl,
    },
  ],

  creator: "Ashish Kudu",
  publisher: "Ashish Kudu",

  openGraph: {
    title: "Ashish Kudu | Mechanical Engineer",
    description:
      "Mechanical engineering portfolio focused on design, manufacturing, product development, and industrial problem solving.",
    url: siteUrl,
    siteName: "Ashish Kudu",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/ashish-cutout.png",
        alt: "Ashish Kudu — Mechanical Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ashish Kudu | Mechanical Engineer",
    description:
      "Mechanical engineering portfolio focused on design, manufacturing, product development, and industrial problem solving.",
    images: ["/ashish-cutout.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ashish Kudu",
  url: siteUrl,
  description:
    "Mechanical engineering portfolio of Ashish Kudu.",
  publisher: {
    "@type": "Person",
    name: "Ashish Kudu",
    url: siteUrl,
    sameAs: [
      "https://www.linkedin.com/in/ashish-kudu-0ba0921b0/",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}