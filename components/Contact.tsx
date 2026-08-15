import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        min-h-[70vh]
        bg-[#111]
        px-6
        py-24
        text-white
        md:px-16
      "
    >
      {/* Heading */}
      <div className="mb-14">
        <h2 className="text-4xl font-bold">
          Contact
        </h2>

        <div className="mt-4 h-1 w-16 bg-white" />

        <p className="mt-6 max-w-2xl leading-7 text-gray-400">
          Interested in artificial intelligence, machine learning,
          or building intelligent solutions? Feel free to connect
          with me.
        </p>
      </div>


      {/* Contact Card */}
      <div
        className="
          max-w-3xl
          rounded-2xl
          border
          border-gray-800
          bg-[#151515]
          p-8
          md:p-10
        "
      >
        <h3 className="text-2xl font-semibold">
          Let's Connect
        </h3>

        <p className="mt-4 leading-7 text-gray-400">
          I'm always interested in learning, collaborating on
          AI and machine learning projects, and connecting with
          people working in the field.
        </p>


        {/* Contact Links */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">

          {/* Email */}
          <a
            href="mailto:your-email@example.com"
            className="
              flex
              items-center
              justify-center
              gap-3
              rounded-full
              bg-white
              px-6
              py-3
              text-sm
              font-medium
              text-black
              transition
              hover:bg-gray-200
            "
          >
            <FaEnvelope />
            Email Me
          </a>


          {/* GitHub */}
          <a
            href="https://github.com/farankhandev"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-gray-600
              px-6
              py-3
              text-sm
              transition
              hover:bg-white
              hover:text-black
            "
          >
            <FaGithub />
            GitHub
          </a>


          {/* LinkedIn */}
          <a
            href="#"
            className="
              flex
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-gray-600
              px-6
              py-3
              text-sm
              transition
              hover:bg-white
              hover:text-black
            "
          >
            <FaLinkedin />
            LinkedIn
          </a>

        </div>
      </div>


      {/* Footer */}
      <footer className="mt-24 border-t border-gray-800 pt-8 text-center">
        <p className="text-sm text-gray-500">
          © 2026 Faran Khan. All rights reserved.
        </p>
      </footer>

    </section>
  );
}