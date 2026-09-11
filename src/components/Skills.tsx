import Reveal from "./Reveal";


const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },

  {
    category: "Backend",
    items: [
      "Node.js",
      "Prisma",
      "Database Design",
      "Authentication",
      "Server Actions",
      "API Development",
    ],
  },

  {
    category: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "Cloudinary",
      "Figma",
      "VS Code",
    ],
  },
];


export default function Skills() {

  return (

    <section
      id="skills"
      className="bg-[#081c18] px-6 py-24 text-white"
    >

      <div className="mx-auto max-w-6xl">


        <p className="text-sm uppercase tracking-[0.3em] text-[#d6ad69]">
          My Expertise
        </p>


        <h2 className="mt-4 text-4xl font-bold">
          Skills & Technologies
        </h2>


        <div className="mt-12 grid gap-8 md:grid-cols-3">


          {skills.map((skill) => (

            <Reveal key={skill.category}>

              <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-[#d6ad69]/30 hover:bg-white/[0.07]">


                <h3 className="text-xl font-bold text-[#d6ad69]">
                  {skill.category}
                </h3>


                <div className="mt-6 flex flex-wrap gap-3">

                  {skill.items.map((item) => (

                    <span
                      key={item}
                      className="rounded-full bg-white/10 px-4 py-2 text-sm text-gray-200 transition hover:bg-[#d6ad69]/20 hover:text-[#f0c77f]"
                    >
                      {item}
                    </span>

                  ))}

                </div>


              </div>

            </Reveal>

          ))}


        </div>


      </div>

    </section>

  );
}