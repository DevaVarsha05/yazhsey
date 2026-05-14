import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yazhsey Technologies | Website, Mobile App & Software Development",
  description:
    "Yazhsey Technologies — A professional IT services company offering Website Development, Mobile App Development, Custom Software, CRM, ERP, and Billing Solutions. GST: 33CGSPK6933J1ZV | Dindigul, Tamil Nadu.",
  keywords:
    "Yazhsey Technologies, website development, mobile app development, custom software, CRM, ERP, billing software, IT services, Tamil Nadu, Dindigul",
  authors: [{ name: "Yazhsey Technologies" }],
  creator: "Yazhsey Technologies",
  openGraph: {
    title: "Yazhsey Technologies | Crafting Digital Excellence",
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
      <body
        className={`${outfit.variable} ${inter.variable} font-[family-name:var(--font-outfit)] antialiased`}
        style={{ background: "#FAF9F6", color: "#1F1F1F" }}
      >
        {children}
      </body>
    </html>
  );
}
