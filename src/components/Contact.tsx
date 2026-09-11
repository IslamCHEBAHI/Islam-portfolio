export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#081c18] px-6 py-24 text-white"
    >

      <div className="mx-auto max-w-6xl">


        <p className="text-sm uppercase tracking-[0.3em] text-[#d6ad69]">
          Contact
        </p>


        <h2 className="mt-4 text-4xl font-bold">
          Let's work together
        </h2>


        <p className="mt-5 max-w-2xl text-gray-300">
          Have a project idea or need a modern web application?
          Feel free to contact me. I would be happy to discuss
          how I can help you.
        </p>



        <div className="mt-10 grid gap-6 md:grid-cols-3">


          <a
            href="mailto:islamchebahi516@gmail.com"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1"
          >

            <h3 className="font-bold text-[#d6ad69]">
              Email
            </h3>

            <p className="mt-2 text-gray-300">
              islamchebahi516@gmail.com
            </p>

          </a>



          <a
            href="https://github.com/IslamCHEBAHI"
            target="_blank"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1"
          >

            <h3 className="font-bold text-[#d6ad69]">
              GitHub
            </h3>

            <p className="mt-2 text-gray-300">
              View my projects
            </p>

          </a>



          <a
            href="https://www.linkedin.com/in/islam-chebahi-374961238/"
            target="_blank"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1"
          >

            <h3 className="font-bold text-[#d6ad69]">
              LinkedIn
            </h3>

            <p className="mt-2 text-gray-300">
              Connect with me
            </p>

          </a>


        </div>


      </div>

    </section>
  );
}