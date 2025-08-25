import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Tarun Kantiwal | Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans antialiased container max-w-4xl mx-auto p-6 mt-15 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}
      >
        <Header />
        <main className="container max-w-4xl mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
