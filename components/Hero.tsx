"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        flex
        min-h-screen
        items-center
        bg-[#111]
        px-6
        py-24
        text-white
        md:px-16
        lg:px-20
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-6xl
          flex-col-reverse
          items-center
          justify-between
          gap-14
          md:flex-row
          md:gap-10
        "
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl text-center md:text-left"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
            Hello, I'm
          </p>

          <h1
            className="
              text-5xl
              font-bold
              tracking-tight
              sm:text-6xl
              lg:text-7xl
            "
          >
            Faran Khan
          </h1>

          <h2
            className="
              mt-5
              text-3xl
              font-semibold
              text-gray-300
              sm:text-4xl
            "
          >
            AI Engineer
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-base
              leading-8
              text-gray-400
              sm:text-lg
              md:mx-0
            "
          >
            I build intelligent solutions using artificial
            intelligence, machine learning, and modern AI
            technologies.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-9
              flex
              flex-col
              items-center
              gap-4
              sm:flex-row
              sm:flex-wrap
              md:justify-start
            "
          >
            {/* View Projects */}
            <a
              href="#projects"
              className="
                rounded-full
                bg-white
                px-7
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
              View Projects
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="
                rounded-full
                border
                border-gray-600
                px-7
                py-3
                text-sm
                font-semibold
                text-white
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-white
                hover:text-black
              "
            >
              Contact Me
            </a>

            {/* Download CV */}
            <a
              href="/Faran.Khan.Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                border
                border-gray-600
                px-7
                py-3
                text-sm
                font-semibold
                text-white
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-white
                hover:text-black
              "
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="shrink-0"
        >
          <div
            className="
              relative
              h-56
              w-56
              overflow-hidden
              rounded-full
              border
              border-gray-700
              p-2
              sm:h-64
              sm:w-64
              lg:h-80
              lg:w-80
            "
          >
            <Image
              src="/profile.jpg"
              alt="Faran Khan"
              fill
              priority
              sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 320px"
              className="rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}