import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sparknet - Connect & Share",
  description:
    "Join Sparknet, the social media platform where connections spark meaningful conversations and communities thrive.",
  keywords: ["social media", "networking", "community", "connect", "share"],
  authors: [{ name: "Sparknet Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
