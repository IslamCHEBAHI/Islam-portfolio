import Link from "next/link";

export default function TravelAgencyCaseStudy() {
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
              Full Stack Web Application
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">
              Travel Agency Platform
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
              A complete travel agency platform designed to manage
              destinations, hotels, stays, promotions and flight
              requests through a modern customer experience and
              professional administration dashboard.
            </p>


            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#d6ad69] px-7 py-3 font-semibold text-[#081c18] transition hover:scale-105"
              >
                Live Demo
              </a>


              <a
                href="#"
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



      {/* MAIN SCREENSHOT */}

      <section className="px-6">

        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5">

          <img
            src="/projects/orizona-voyage.png"
            alt="Travel Agency Platform"
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
              A complete digital platform for a travel agency
            </h2>

          </div>


          <div>

            <p className="leading-relaxed text-gray-300">
              The platform brings together the main operations of a
              travel agency into one digital environment. Customers
              can explore destinations, hotels and travel offers,
              while administrators can manage the content and handle
              customer requests through a dedicated back-office.
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
            Connecting the customer experience with agency operations
          </h2>

          <p className="mt-6 max-w-3xl leading-relaxed text-gray-300">
            A travel agency needs more than a simple presentation
            website. The platform needs to organize destinations,
            hotels, stays and promotions while allowing customers
            to submit requests that can be processed by the agency.
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
            One platform, two experiences
          </h2>


          <div className="mt-12 grid gap-6 md:grid-cols-2">


            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">
                Customer Experience
              </h3>

              <p className="mt-4 leading-relaxed text-gray-300">
                A modern public interface where visitors can explore
                destinations, discover hotels and stays, browse
                offers and submit flight requests.
              </p>

            </div>


            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">
                Administration
              </h3>

              <p className="mt-4 leading-relaxed text-gray-300">
                A dedicated administration interface for managing
                destinations, hotels, cities, stays, promotions and
                customer flight requests.
              </p>

            </div>


          </div>

        </div>

      </section>



      {/* FEATURES */}

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.3em] text-[#d6ad69]">
            Key Features
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            What the platform provides
          </h2>


          <div className="mt-12 grid gap-6 md:grid-cols-3">


            {[
              {
                title: "Destinations",
                text: "Dynamic destination management with images, descriptions and publication control.",
              },

              {
                title: "Hotels",
                text: "Hotel destinations, cities, hotel details, prices, stars and promotional offers.",
              },

              {
                title: "Travel Stays",
                text: "Travel packages with duration, prices, dates, destinations and available places.",
              },

              {
                title: "Flight Requests",
                text: "Customers can submit departure, arrival, dates and passenger information for flight requests.",
              },

              {
                title: "Admin Dashboard",
                text: "Centralized back-office interface for managing the main agency content and requests.",
              },

              {
                title: "Image Management",
                text: "Cloud-based image management for destinations, hotels and travel content.",
              },
            ].map((feature) => (

              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >

                <h3 className="text-xl font-bold text-[#d6ad69]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-300">
                  {feature.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* TECHNOLOGIES */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.3em] text-[#d6ad69]">
            Technologies
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Built with modern technologies
          </h2>


          <div className="mt-8 flex flex-wrap gap-3">

            {[
              "Next.js",
              "React",
              "TypeScript",
              "Prisma",
              "NextAuth",
              "Cloudinary",
              "SQLite",
              "Tailwind CSS",
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



      {/* DEVELOPMENT */}

      <section className="border-t border-white/10 bg-white/[0.03] px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.3em] text-[#d6ad69]">
            Development
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            From interface to business logic
          </h2>

          <p className="mt-6 max-w-3xl leading-relaxed text-gray-300">
            The project combines a responsive customer-facing
            interface with server-side business logic, database
            management, authentication and administrative workflows.
            The architecture was designed to allow the platform to
            evolve as the agency adds new destinations, hotels,
            travel offers and services.
          </p>

        </div>

      </section>



      {/* CTA */}

      <section className="px-6 pb-24 pt-12">

        <div className="mx-auto max-w-6xl rounded-3xl border border-[#d6ad69]/20 bg-[#d6ad69]/10 p-10 text-center md:p-16">

          <h2 className="text-3xl font-bold md:text-4xl">
            Interested in the project?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Explore the project and discover how the platform combines
            customer experience with travel agency management.
          </p>


          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#d6ad69] px-7 py-3 font-semibold text-[#081c18]"
            >
              Live Demo
            </a>


            <a
              href="#"
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