import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProtectLogin from "@/components/auth/ProtectLogin";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Bank Dashboard",
    template: "%s | Bank Dashboard",
  },
  description:
    "A modern, responsive banking dashboard built with Next.js, React, and Tailwind CSS",
  metadataBase: new URL("https://bank-dash-six.vercel.app"),
  openGraph: {
    title: "Bank Dashboard",
    description:
      "Manage your finances, track expenses, and view transactions in a responsive dashboard",
    url: "/",
    siteName: "Bank Dashboard",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bank Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bank Dashboard",
    description:
      "Manage your finances, track expenses, and view transactions in a responsive dashboard",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased bg-[#F5F7FA] min-h-screen w-full">
        <ProtectLogin>{children}</ProtectLogin>
      </body>
    </html>
  );
}
