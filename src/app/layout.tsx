import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const elementsNav = [
    { url: "/", name: "Home" },
    { url: "./ejemplo", name: "Ejemplo" },
    { url: "#", name: "iPhone" },
    { url: "#", name: "Watch" },
    { url: "#", name: "TV" },
    { url: "#", name: "Music" },
    { url: "#", name: "Support" },
  ];
  return (
    <html lang="en">
      <head>
        <title>myPet</title>
      </head>
      <body className={inter.className}>
        <header>
          <Navbar elements={elementsNav} />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
