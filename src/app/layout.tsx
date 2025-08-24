import type { Metadata } from "next";
import "./globals.css";
// import { Inter } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["400", "700"], // you can choose weights
// });

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
        className={`font-sans antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}
      >
        {/* Main content */}
        <main className="container max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
