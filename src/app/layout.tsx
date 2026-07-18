import type { Metadata } from "next";
import "./globals.css";
import StarBackground from "@/components/common/StarBackground";
import Navbar from "@/components/common/Navbar";

export const metadata: Metadata = {
  title: "Mahmoud Gomaa | Portfolio",
  description:
    "Mahmoud Gomaa is a Software Engineer focused on Frontend Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <StarBackground />
        <div className="mb-4">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
