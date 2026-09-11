import Reveal from "./Reveal";

const projects = [
  {
    title: "Travel Agency Platform",

    type: "Full Stack Web Application",

    description:
      "A complete travel agency management platform for managing destinations, hotels, travel packages and flight requests through a professional administration dashboard.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "NextAuth",
      "Cloudinary",
    ],

    image: "/projects/orizona-voyage.png",

    github: "#",

    demo: "#",

    caseStudy: "/projects/travel-agency",
  },

  {
    title: "Assia Chic Boutique",

    type: "E-commerce Platform",

    description:
      "An online fashion boutique dedicated to women's accessories, designed to provide customers with a modern and convenient online shopping experience.",

    technologies: [
      "E-commerce",
      "Online Store",
      "Responsive Design",
      "Product Management",
    ],

    image: "/projects/assia-chic-boutique.png",

    github:
      "https://github.com/IslamCHEBAHI/Boutique-Assia-chic",

    demo:
      "https://assia-chic-boutique.com/",

    caseStudy: "/projects/assia-chic",
  },
];


export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#081c18] px-6 py-24 text-white"
    >

      <div className="mx-auto max-w-6xl">

        <p className="text-sm uppercase tracking-[0.3em] text-[#d6ad69]">
          My Work
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Featured Projects
        </h2>

        <p className="mt-5 max-w-2xl text-gray-300">
          A selection of web applications and digital products
          I have designed and developed.
        </p>


        <div className="mt-12 grid gap-10">


          {projects.map((project) => (

            <Reveal key={project.title}>

              <article
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >

                <div className="grid md:grid-cols-2">


                  {/* PROJECT IMAGE */}

                    <div className="flex h-[280px] items-center justify-center overflow-hidden bg-black/20 md:h-[320px]">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="max-h-full max-w-full object-contain"
                        />
                    </div>


                  {/* PROJECT INFORMATION */}

                  <div className="flex flex-col justify-center p-8">


                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#d6ad69]">
                      {project.type}
                    </span>


                    <h3 className="mt-3 text-3xl font-bold">
                      {project.title}
                    </h3>


                    <p className="mt-5 leading-relaxed text-gray-300">
                      {project.description}
                    </p>


                    {/* TECHNOLOGIES */}

                    <div className="mt-6 flex flex-wrap gap-3">

                      {project.technologies.map((tech) => (

                        <span
                          key={tech}
                          className="rounded-full bg-[#d6ad69]/20 px-4 py-2 text-sm text-[#f0c77f]"
                        >
                          {tech}
                        </span>

                      ))}

                    </div>


                    {/* BUTTONS */}

                    <div className="mt-8 flex flex-wrap gap-3">


                      {project.demo !== "#" && (

                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-[#d6ad69] px-6 py-3 font-semibold text-[#081c18] transition hover:scale-105"
                        >
                          Live Demo
                        </a>

                      )}


                      {project.github !== "#" && (

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-white/20 px-6 py-3 transition hover:bg-white hover:text-[#081c18]"
                        >
                          GitHub
                        </a>

                      )}


                      <a
                        href={project.caseStudy}
                        className="rounded-full border border-[#d6ad69]/40 px-6 py-3 text-[#d6ad69] transition hover:bg-[#d6ad69] hover:text-[#081c18]"
                      >
                        Case Study
                      </a>


                    </div>


                  </div>

                </div>

              </article>

            </Reveal>

          ))}


        </div>

      </div>

    </section>
  );
}