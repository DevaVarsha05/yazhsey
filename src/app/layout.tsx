import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "YazhSey  Technologies | Website, Mobile App & Software Development",
  description:
    "YazhSey  Technologies — A professional IT services company offering Website Development, Mobile App Development, Custom Software, CRM, ERP, and Billing Solutions. GST: 33CGSPK6933J1ZV | Dindigul, Tamil Nadu.",
  keywords:
    "YazhSey  Technologies, website development, mobile app development, custom software, CRM, ERP, billing software, IT services, Tamil Nadu, Dindigul",
  authors: [{ name: "YazhSey  Technologies" }],
  creator: "YazhSey  Technologies",
  openGraph: {
    title: "YazhSey  Technologies | Software Development",
=======
  title: "Yazhsey Technologies | Website, Mobile App & Software Development",
  description:
    "Yazhsey Technologies — A professional IT services company offering Website Development, Mobile App Development, Custom Software, CRM, ERP, and Billing Solutions. GST: 33CGSPK6933J1ZV | Dindigul, Tamil Nadu.",
  keywords:
    "Yazhsey Technologies, website development, mobile app development, custom software, CRM, ERP, billing software, IT services, Tamil Nadu, Dindigul",
  authors: [{ name: "Yazhsey Technologies" }],
  creator: "Yazhsey Technologies",
  openGraph: {
    title: "Yazhsey Technologies | Software Development",
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
    description:
      "Professional IT services and software development company in Tamil Nadu. Websites, Apps, CRM, ERP, Billing Software.",
    type: "website",
    locale: "en_IN",
<<<<<<< HEAD
    siteName: "YazhSey  Technologies",
=======
    siteName: "Yazhsey Technologies",
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
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
<<<<<<< HEAD
      <body 
        style={{ 
          background: "#FFFFFF",
          color: "#111827",
          position: "relative", // Fix: Global relative anchor layout matrix injection for core elements positioning reference
          minHeight: "100vh"
        }}
      >
=======
      <body style={{ background: "#181A1B", color: "#E5E7EB" }}>
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
        {children}
      </body>
    </html>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
