import {
  SiPython,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiGit,
  SiGithub,
  SiJupyter,
} from "react-icons/si";

import Reveal from "./Reveal";

const machineLearningSkills = [
  {
    name: "Python",
    description: "Programming",
    icon: SiPython,
  },
  {
    name: "NumPy",
    description: "Numerical Computing",
    icon: SiNumpy,
  },
  {
    name: "Pandas",
    description: "Data Analysis",
    icon: SiPandas,
  },
  {
    name: "Scikit-learn",
    description: "Machine Learning",
    icon: SiScikitlearn,
  },
];

const tools = [
  {
    name: "Git",
    description: "Version Control",
    icon: SiGit,
  },
  {
    name: "GitHub",
    description: "Code & Collaboration",
    icon: SiGithub,
  },
  {
    name: "Jupyter",
    description: "Data Science",
    icon: SiJupyter,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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

        {/* Heading */}
        <Reveal>
          <div className="mb-14">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
              What I work with
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl">
              Skills
            </h2>

            <div className="mt-5 h-1 w-16 bg-white" />
          </div>
        </Reveal>


        {/* AI & Machine Learning */}
        <Reveal direction="left" delay={0.1}>
          <div className="mb-14">

            <h3 className="mb-7 text-2xl font-semibold">
              AI & Machine Learning
            </h3>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {machineLearningSkills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <Reveal
                    key={skill.name}
                    delay={0.15 + index * 0.08}
                  >
                    <div
                      className="
                        group
                        h-full
                        rounded-2xl
                        border
                        border-gray-800
                        bg-[#151515]
                        p-6
                        transition
                        duration-300
                        hover:-translate-y-2
                        hover:border-gray-600
                      "
                    >
                      <Icon
                        className="
                          text-4xl
                          text-gray-300
                          transition
                          duration-300
                          group-hover:scale-110
                        "
                      />

                      <h4 className="mt-5 text-lg font-semibold">
                        {skill.name}
                      </h4>

                      <p className="mt-2 text-sm text-gray-500">
                        {skill.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}

            </div>
          </div>
        </Reveal>


        {/* Tools */}
        <Reveal direction="right" delay={0.2}>
          <div>

            <h3 className="mb-7 text-2xl font-semibold">
              Tools
            </h3>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {tools.map((tool, index) => {
                const Icon = tool.icon;

                return (
                  <Reveal
                    key={tool.name}
                    delay={0.25 + index * 0.08}
                  >
                    <div
                      className="
                        group
                        rounded-2xl
                        border
                        border-gray-800
                        bg-[#151515]
                        p-6
                        transition
                        duration-300
                        hover:-translate-y-2
                        hover:border-gray-600
                      "
                    >
                      <Icon
                        className="
                          text-4xl
                          text-gray-300
                          transition
                          duration-300
                          group-hover:scale-110
                        "
                      />

                      <h4 className="mt-5 text-lg font-semibold">
                        {tool.name}
                      </h4>

                      <p className="mt-2 text-sm text-gray-500">
                        {tool.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}