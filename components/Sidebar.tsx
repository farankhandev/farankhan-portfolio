"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { name: "HOME", id: "home" },
  { name: "ABOUT", id: "about" },
  { name: "SKILLS", id: "skills" },
  { name: "PROJECTS", id: "projects" },
  { name: "CONTACT", id: "contact" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-10% 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ================================
          MOBILE NAVIGATION
      ================================= */}

      <nav
        className="
          fixed
          left-0
          top-0
          z-50
          flex
          h-14
          w-full
          items-center
          justify-center
          bg-black
          text-white
          md:hidden
        "
      >
        <div className="flex items-center gap-5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`
                  text-[11px]
                  tracking-wide
                  transition
                  ${
                    isActive
                      ? "font-semibold text-white"
                      : "text-gray-500 hover:text-white"
                  }
                `}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </nav>


      {/* ================================
          DESKTOP SIDEBAR
      ================================= */}

      <aside
        className="
          fixed
          left-0
          top-0
          z-50
          hidden
          h-screen
          w-64
          flex-col
          items-center
          bg-black
          text-white
          md:flex
        "
      >

        {/* Profile Image */}
        <div
          className="
            relative
            mt-10
            h-28
            w-28
            overflow-hidden
            rounded-full
            border
            border-gray-800
          "
        >
          <Image
            src="/profile.jpg"
            alt="Faran Khan"
            fill
            priority
            sizes="112px"
            className="object-cover"
          />
        </div>


        {/* Name */}
        <h2 className="mt-5 text-xl font-semibold">
          Faran Khan
        </h2>


        {/* GitHub */}
        <a
          href="https://github.com/farankhandev"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-6
            text-sm
            text-gray-500
            transition
            hover:text-white
          "
        >
          GitHub
        </a>


        {/* Navigation */}
        <nav className="mt-12 w-full">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`
                  relative
                  block
                  px-8
                  py-3
                  text-sm
                  tracking-wide
                  transition
                  ${
                    isActive
                      ? "bg-[#181818] text-white"
                      : "text-gray-500 hover:bg-[#151515] hover:text-white"
                  }
                `}
              >
                {/* Active Indicator */}
                {isActive && (
                  <span
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-1
                      bg-white
                    "
                  />
                )}

                {item.name}
              </a>
            );
          })}
        </nav>

      </aside>
    </>
  );
}