import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Perfect Loans – Fast & Easy Loans",
  description:
    "Hassle-free financial services when you need them most. Get a decision today with The Perfect Loans.",
  icons: {
    icon: "/images/0.png",
    apple: "/images/0.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;500;600;700&family=Arimo:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
