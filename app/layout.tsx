import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Landingpage/Hero";
import AppointmentContextProvider from "@/context/AppointmentContext";
import ContactUsClient from "@/components/ContactUsClient";

import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ['latin'], // Adjust as necessary
  weight: ['400', '700'], // Add the weights you need
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col ${playfairDisplay.className}`}>
        <AppointmentContextProvider>
          <Header />
          <main className="flex-grow">
            <ContactUsClient />
            {children}
            </main>
          <Footer />
        </AppointmentContextProvider>
      </body>
    </html>
  );
}
