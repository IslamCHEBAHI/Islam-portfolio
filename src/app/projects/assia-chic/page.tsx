import Link from "next/link";

export default function AssiaChicCaseStudy() {
  return (
    <main className="min-h-screen bg-[#081c18] text-white">

      {/* HERO */}

      <section className="px-6 pb-20 pt-32">

        <div className="mx-auto max-w-6xl">

          <Link
            href="/#projects"
            className="inline-flex rounded-full border border-white/20 px-5 py-2 text-sm text-gray-300 transition hover:border-[#d6ad69] hover:text-[#d6ad69]"
          >
            ← Back to Projects
          </Link>


          <div className="mt-12 max-w-4xl">

            <p className="text-sm uppercase tracking-[0.3em] text-[#d6ad69]">
              E-commerce Platform
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">
              Assia Chic Boutique
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
              An online fashion boutique dedicated to women's accessories,
              designed to provide a modern and convenient online shopping
              experience.
            </p>


            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="https://assia-chic-boutique.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#d6ad69] px-7 py-3 font-semibold text-[#081c18] transition hover:scale-105"
              >
                Visit Website
              </a>


              <a
                href="https://github.com/IslamCHEBAHI/Boutique-Assia-chic"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-7 py-3 transition hover:bg-white hover:text-[#081c18]"
              >
                View GitHub
              </a>

            </div>

          </div>

        </div>

      </section>



      {/* PROJECT IMAGE */}

      <section className="px-6">

        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5">

          <img
            src="/projects/assia-chic-boutique.png"
            alt="Assia Chic Boutique"
            className="h-auto w-full object-contain"
          />

        </div>

      </section>



      {/* OVERVIEW */}

      <section className="px-6 py-24">

        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">


          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-[#d6ad69]">
              Overview
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              An online shopping experience
            </h2>

          </div>


          <div>

            <p className="leading-relaxed text-gray-300">
              Assia Chic Boutique is an e-commerce project created for
              selling women's accessories online. The platform presents
              products in a modern digital storefront and provides
              customers with a convenient way to discover and purchase
              products online.
            </p>

          </div>

        </div>

      </section>



      {/* CHALLENGE */}

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.3em] text-[#d6ad69]">
            The Challenge
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Creating a modern online boutique
          </h2>

          <p className="mt-6 max-w-3xl leading-relaxed text-gray-300">
            The goal was to create a digital storefront that presents
            women's accessories clearly while providing a simple,
            attractive and responsive shopping experience across
            different devices.
          </p>

        </div>

      </section>



      {/* SOLUTION */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.3em] text-[#d6ad69]">
            The Solution
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            From concept to online store
          </h2>


          <div className="mt-12 grid gap-6 md:grid-cols-3">


            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-xl font-bold">
                Product Experience
              </h3>

              <p className="mt-4 text-gray-300">
                Products are presented through a clean and accessible
                online shopping interface.
              </p>

            </div>


            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-xl font-bold">
                Responsive Design
              </h3>

              <p className="mt-4 text-gray-300">
                The experience is designed to work across desktop,
                tablet and mobile screens.
              </p>

            </div>


            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-xl font-bold">
                E-commerce
              </h3>

              <p className="mt-4 text-gray-300">
                A complete digital storefront focused on online
                product discovery and sales.
              </p>

            </div>


          </div>

        </div>

      </section>



      {/* TECHNOLOGIES */}

      <section className="border-t border-white/10 px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.3em] text-[#d6ad69]">
            Technologies
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Built with modern tools
          </h2>


          <div className="mt-8 flex flex-wrap gap-3">

            {[
              "Next.js",
              "TypeScript",
              "E-commerce",
              "Responsive Design",
              "Product Management",
            ].map((technology) => (

              <span
                key={technology}
                className="rounded-full bg-[#d6ad69]/20 px-5 py-3 text-sm text-[#f0c77f]"
              >
                {technology}
              </span>

            ))}

          </div>

        </div>

      </section>



      {/* CTA */}

      <section className="px-6 pb-24">

        <div className="mx-auto max-w-6xl rounded-3xl border border-[#d6ad69]/20 bg-[#d6ad69]/10 p-10 text-center md:p-16">

          <h2 className="text-3xl font-bold md:text-4xl">
            Explore the live project
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Visit the live website or explore the source code on GitHub.
          </p>


          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="https://assia-chic-boutique.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#d6ad69] px-7 py-3 font-semibold text-[#081c18]"
            >
              Visit Website
            </a>


            <a
              href="https://github.com/IslamCHEBAHI/Boutique-Assia-chic"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-7 py-3"
            >
              GitHub Repository
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}