import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";



const geistSans = Geist({

  variable: "--font-geist-sans",

  subsets: ["latin"],

});



const geistMono = Geist_Mono({

  variable: "--font-geist-mono",

  subsets: ["latin"],

});




export const metadata: Metadata = {

  title: "CHEBAHI ISLAM DEV | Full Stack Developer",

  description:
    "Full Stack Developer specialized in building modern and scalable web applications using Next.js, React, TypeScript and Prisma.",

  keywords: [

    "Full Stack Developer",

    "Next.js Developer",

    "React Developer",

    "TypeScript Developer",

    "Web Developer",

    "Software Engineer",

    "Frontend Developer",

    "Backend Developer",

  ],


  authors: [

    {

      name: "Islam CHEBAHI",

    },

  ],


  creator: "CHEBAHI ISLAM DEV",


  openGraph: {

    title:
      "CHEBAHI ISLAM DEV | Full Stack Developer",

    description:
      "Full Stack Developer building modern and scalable web applications.",

    type:
      "website",

    url: "https://islam-portfolio-tau.vercel.app",
    siteName: "CHEBAHI ISLAM DEV",

  },
};



export default function RootLayout({

  children,

}: LayoutProps<"/">) {


  return (

    <html

      lang="en"

      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}

    >

      <body className="min-h-full flex flex-col">

        {children}

      </body>


    </html>

  );

}