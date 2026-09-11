export default function About() {
  return (
    <section
      id="about"
      className="bg-[#081c18] px-6 py-24 text-white"
    >

      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">


        {/* LEFT */}

        <div>

          <p className="text-sm uppercase tracking-[0.3em] text-[#d6ad69]">
            About Me
          </p>


          <h2 className="mt-4 text-4xl font-bold">
            Building digital solutions
            <br />
            with modern technologies.
          </h2>


          <p className="mt-6 leading-relaxed text-gray-300">

            I'm Islam, a Full Stack Developer focused on creating
            modern, scalable and user-friendly web applications.

            <br /><br />

            I enjoy transforming ideas into complete digital products,
            from designing interfaces to developing backend systems
            and database architectures.

          </p>


          <p className="mt-5 leading-relaxed text-gray-300">

            My main focus is building applications using Next.js,
            TypeScript and modern development practices while
            maintaining clean code and great user experience.

          </p>


        </div>



        {/* RIGHT */}

        <div className="grid gap-5">


          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-xl font-bold text-[#d6ad69]">
              Development
            </h3>

            <p className="mt-3 text-gray-300">
              Full-stack web development, architecture design,
              database integration and authentication systems.
            </p>

          </div>



          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-xl font-bold text-[#d6ad69]">
              Problem Solving
            </h3>

            <p className="mt-3 text-gray-300">
              Creating efficient solutions focused on real business
              needs and user experience.
            </p>

          </div>



          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-xl font-bold text-[#d6ad69]">
              Continuous Learning
            </h3>

            <p className="mt-3 text-gray-300">
              Always improving my skills and exploring new technologies.
            </p>

          </div>


        </div>


      </div>

    </section>
  );
}