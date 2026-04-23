import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASUS | In Search of Incredible",
  description: "ASUS is a worldwide top-three consumer notebook vendor and maker of the world's best-selling, most award-winning, motherboards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
