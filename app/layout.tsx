import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import {Navbar, Footer} from '../components/index'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "We care foundation",
  description: "A non profit charity foundation that aims to improve lives of children and families in distress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <div>
          <Navbar/>
        </div>
        <MantineProvider>{children}</MantineProvider>
        <div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}



