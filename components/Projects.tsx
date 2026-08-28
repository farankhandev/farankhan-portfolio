import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "./Reveal";

const projects = [
  {
    title: "House Price Prediction API",

    description:
      "A machine learning REST API that predicts house prices from property features using a trained regression model.",

    technologies: [
      "Python",
      "Scikit-learn",
      "NumPy",
      "Flask",
      "Joblib",
    ],

    github: "https://github.com/farankhandev/ml-backend",

    live: "https://ml-dashboard-phi.vercel.app/",
  },
];

export default function Projects() {
  const project = projects[0];

  return (
    <section
      id="projects"
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
              What I've built
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl">
              Projects
            </h2>

            <div className="mt-5 h-1 w-16 bg-white" />

            <p className="mt-6 max-w-2xl leading-7 text-gray-400">
              Practical machine learning projects focused on
              turning AI concepts into working solutions.
            </p>
          </div>
        </Reveal>

        {/* Project */}
        <Reveal direction="up" delay={0.15}>
          <article
            className="
              group
              overflow-hidden
              rounded-2xl
              border
              border-gray-800
              bg-[#151515]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-gray-600
            "
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

              {/* Project Visual */}
              <div
                className="
                  flex
                  min-h-[280px]
                  items-center
                  justify-center
                  bg-[#1a1a1a]
                  p-8
                "
              >
                <div
                  className="
                    w-full
                    max-w-sm
                    rounded-xl
                    border
                    border-gray-800
                    bg-[#111]
                    p-6
                    transition
                    duration-500
                    group-hover:scale-[1.02]
                  "
                >
                  <p className="text-sm text-gray-500">
                    Machine Learning API
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold">
                    House Price
                    <br />
                    Prediction
                  </h3>

                  <div className="mt-6 space-y-3">
                    <div className="h-2 rounded-full bg-gray-800">
                      <div className="h-2 w-4/5 rounded-full bg-gray-500" />
                    </div>

                    <div className="h-2 rounded-full bg-gray-800">
                      <div className="h-2 w-3/5 rounded-full bg-gray-500" />
                    </div>

                    <div className="h-2 rounded-full bg-gray-800">
                      <div className="h-2 w-2/3 rounded-full bg-gray-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Information */}
              <div className="p-8 md:p-10">

                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                  Machine Learning
                </p>

                <h3 className="mt-4 text-3xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-5 max-w-xl leading-8 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full
                        border
                        border-gray-700
                        px-3
                        py-1.5
                        text-xs
                        text-gray-300
                        transition
                        hover:border-gray-500
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="mt-9 flex flex-wrap gap-4">

                  {/* Live Demo */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
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
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.github}
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
                    View on GitHub
                  </a>

                </div>

              </div>
            </div>
          </article>
        </Reveal>

      </div>
    </section>
  );
}