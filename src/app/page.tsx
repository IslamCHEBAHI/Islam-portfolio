"use client";

import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {

  return (

    <main className="min-h-screen bg-[#081c18] text-white">

      <Navbar />


      {/* HERO */}

      <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-24">

        <div className="grid w-full items-center gap-12 md:grid-cols-2">


          {/* TEXT */}

          <motion.div
            className="max-w-3xl"

            initial={{
              opacity: 0,
              y: 40,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.8,
            }}
            >


            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#d6ad69]">
              Full Stack Developer
            </p>


            <h1 className="text-5xl font-bold leading-tight md:text-7xl">

              Hi, I'm Islam.

              <br />

              I build modern web applications.

            </h1>



            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">

              I specialize in building scalable and user-focused applications
              using modern technologies like Next.js, TypeScript, Prisma,
              and database solutions.

            </p>



            <div className="mt-10 flex gap-4">


              <a
                href="#projects"
                className="rounded-full bg-[#d6ad69] px-7 py-3 font-semibold text-[#081c18] transition hover:scale-105"
              >
                View My Projects
              </a>



              <a
                href="#contact"
                className="rounded-full border border-white/30 px-7 py-3 font-semibold transition hover:bg-white hover:text-[#081c18]"
              >
                Contact Me
              </a>


            </div>




            <div className="mt-12 flex gap-8 text-sm text-gray-300">


              <div>

                <strong className="block text-2xl text-white">
                  5+
                </strong>

                Projects

              </div>



              <div>

                <strong className="block text-2xl text-white">
                  Full Stack
                </strong>

                Developer

              </div>



              <div>

                <strong className="block text-2xl text-white">
                  Next.js
                </strong>

                Specialist

              </div>


            </div>


          </motion.div>





          {/* IMAGE */}


          <motion.div
            className="flex justify-center"

            initial={{
              opacity: 0,
              scale: 0.8,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            >


            <div className="relative">


              <div
                className="absolute inset-0 rounded-full bg-[#d6ad69] opacity-30 blur-3xl"
              />


              <Image

                src="/images/islam.jpg"

                alt="Islam Full Stack Developer"

                width={380}

                height={380}

                priority

                className="relative rounded-full border border-white/10 object-cover"

              />


            </div>


          </motion.div>



        </div>


      </section>



      <About />

      <Projects />

      <Skills />

      <Contact />


    </main>

  );
}