import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from './store/provider'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "westock",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-950 font-body text-white">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
