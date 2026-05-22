import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yazhsey Technologies | Website, Mobile App & Software Development",
  description:
    "Yazhsey Technologies — A professional IT services company offering Website Development, Mobile App Development, Custom Software, CRM, ERP, and Billing Solutions. GST: 33CGSPK6933J1ZV | Dindigul, Tamil Nadu.",
  keywords:
    "Yazhsey Technologies, website development, mobile app development, custom software, CRM, ERP, billing software, IT services, Tamil Nadu, Dindigul",
  authors: [{ name: "Yazhsey Technologies" }],
  creator: "Yazhsey Technologies",
  openGraph: {
    title: "Yazhsey Technologies | Software Development",
    description:
      "Professional IT services and software development company in Tamil Nadu. Websites, Apps, CRM, ERP, Billing Software.",
    type: "website",
    locale: "en_IN",
    siteName: "Yazhsey Technologies",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: "#181A1B", color: "#E5E7EB" }}>
        {children}
      </body>
    </html>
  );
}
