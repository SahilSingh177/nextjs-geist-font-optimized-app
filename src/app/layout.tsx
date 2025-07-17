import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sahil Singh - Software Engineer | AI & ML Specialist",
  description: "Portfolio of Sahil Singh, Software Engineer specializing in AI, ML, and scalable backend systems. Explore innovative projects and technical expertise.",
  keywords: ["Software Engineer", "AI", "Machine Learning", "Backend Systems", "Sahil Singh"],
  authors: [{ name: "Sahil Singh" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-cosmic-blue text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
