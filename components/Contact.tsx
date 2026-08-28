"use client";

import { useState, type FormEvent } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import Reveal from "./Reveal";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "9e6496be-027e-4f11-ba8c-6ff897b7ef3a"
    );

    formData.append(
      "subject",
      "New Contact Message from Faran Khan Portfolio"
    );

    formData.append(
      "from_name",
      "Faran Khan Portfolio"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus(
          "Thanks! Your message has been sent successfully."
        );

        form.reset();
      } else {
        setStatus(
          "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);

      setStatus(
        "Unable to send your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

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
          <div className="grid max-w-5xl gap-12 lg:grid-cols-2">

            {/* Left Side */}
            <div>
              <h3 className="text-2xl font-semibold">
                Let's connect.
              </h3>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                I'm interested in connecting with people
                working on artificial intelligence, machine
                learning, and practical AI solutions.
              </p>

              <p className="mt-4 leading-7 text-gray-500">
                Whether it's an AI project, collaboration,
                opportunity, or simply a conversation about AI,
                feel free to reach out.
              </p>

              {/* Social Links */}
              <div className="mt-10 flex flex-wrap gap-4">

                {/* Email */}
                <a
                  href="mailto:faran.khan.dev@gmail.com"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-gray-700
                    px-5
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
                  <FaEnvelope />
                  Email
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
                    px-5
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
                    px-5
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

              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-gray-300
                    "
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={80}
                    placeholder="Your name"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-gray-800
                      bg-[#181818]
                      px-4
                      py-3
                      text-white
                      outline-none
                      placeholder:text-gray-600
                      transition
                      focus:border-gray-500
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-gray-300
                    "
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-gray-800
                      bg-[#181818]
                      px-4
                      py-3
                      text-white
                      outline-none
                      placeholder:text-gray-600
                      transition
                      focus:border-gray-500
                    "
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-gray-300
                    "
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    maxLength={2000}
                    placeholder="Tell me about your project or opportunity..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-gray-800
                      bg-[#181818]
                      px-4
                      py-3
                      text-white
                      outline-none
                      placeholder:text-gray-600
                      transition
                      focus:border-gray-500
                    "
                  />
                </div>

                {/* Spam Protection */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full
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
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                  "
                >
                  {isSubmitting
                    ? "Sending..."
                    : "Send Message"}
                </button>

                {/* Status Message */}
                {status && (
                  <p
                    role="status"
                    className="text-sm text-gray-400"
                  >
                    {status}
                  </p>
                )}

              </form>
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