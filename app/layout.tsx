import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "The Ethereal Explorer",
  description:
    " Explore the extraordinary with The Ethereal Explorer. We curate unique travel experiences that transcend the ordinary, journeying to breathtaking destinations and unveiling the magic hidden within our world.  Embark on an unforgettable adventure –  contact The Ethereal Explorer today and discover the ethereal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-primary text-teritary overflow-x-hidden ${nunito.variable}`}>
        
        {children}
        </body>
    </html>
  );
}
