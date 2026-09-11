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

  title: "Islam | Full Stack Developer",

  description:
    "Islam is a Full Stack Developer specialized in building modern web applications using Next.js, React, TypeScript, Prisma and modern technologies.",


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

      name: "Islam",

    },

  ],


  creator: "Islam",


  openGraph: {

    title:
      "Islam | Full Stack Developer",

    description:
      "Building modern, scalable and user-focused web applications with Next.js and TypeScript.",

    type:
      "website",

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