"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        min-h-screen
        bg-[#111]
        px-6
        py-24
        text-white
        md:px-16
        lg:px-20
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <Reveal>
          <div className="mb-14">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
              Get in touch
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl">
              Contact
            </h2>

            <div className="mt-5 h-1 w-16 bg-white" />
          </div>
        </Reveal>

        {/* Contact Content */}
        <Reveal delay={0.15}>
          <div className="max-w-2xl">

            {/* Heading */}
            <h3 className="text-2xl font-semibold">
              Let's connect.
            </h3>

            {/* Main Description */}
            <p className="mt-5 text-lg leading-8 text-gray-400">
              I'm interested in connecting with people working
              on artificial intelligence, machine learning, and
              practical AI solutions.
            </p>

            {/* Secondary Description */}
            <p className="mt-4 leading-7 text-gray-500">
              Whether it's an AI project, collaboration,
              opportunity, or simply a conversation about AI,
              feel free to reach out.
            </p>

            {/* Contact Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              {/* Email */}
              <a
                href="mailto:faran.khan.dev@gmail.com"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-black
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-gray-200
                "
              >
                <FaEnvelope />
                Email Me
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/faran-khan-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-gray-700
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-gray-400
                "
              >
                <FaLinkedin />
                LinkedIn
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/farankhandev"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-gray-700
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-gray-400
                "
              >
                <FaGithub />
                GitHub
              </a>

              {/* Book a Call */}
              <a
                href="https://calendly.com/contact759me/15-minute-intro-call"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-gray-700
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-gray-400
                "
              >
                <span aria-hidden="true">📅</span>
                Book a Call
              </a>

            </div>

          </div>
        </Reveal>

        {/* Footer */}
        <div className="mt-24 border-t border-gray-800 pt-8">

          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Faran Khan. All rights reserved.
          </p>

        </div>

      </div>
    </section>
  );
}