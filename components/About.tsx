import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
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
              Get to know me
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl">
              About Me
            </h2>

            <div className="mt-5 h-1 w-16 bg-white" />
          </div>
        </Reveal>


        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">

          {/* About Text */}
          <Reveal direction="left" delay={0.1}>
            <div className="space-y-6">

              <p className="text-lg leading-8 text-gray-300">
                I'm Faran Khan, an aspiring AI Engineer focused on
                building practical solutions with artificial
                intelligence and machine learning.
              </p>

              <p className="leading-8 text-gray-400">
                I'm building a strong foundation in Python,
                data analysis, machine learning, and AI systems
                through hands-on projects and continuous learning.
              </p>

              <p className="leading-8 text-gray-400">
                I enjoy turning machine learning concepts into
                practical applications and exploring how modern
                AI technologies can be used to solve real-world
                problems.
              </p>

              <p className="leading-8 text-gray-400">
                My goal is to continue growing as an AI Engineer
                and eventually build intelligent systems that are
                useful, reliable, and impactful.
              </p>

            </div>
          </Reveal>


          {/* Current Focus Card */}
          <Reveal direction="right" delay={0.2}>
            <div
              className="
                rounded-2xl
                border
                border-gray-800
                bg-[#151515]
                p-8
                transition
                duration-300
                hover:-translate-y-1
                hover:border-gray-600
              "
            >
              <h3 className="text-xl font-semibold">
                Current Focus
              </h3>

              <div className="mt-7 space-y-6">

                {/* Focus */}
                <div>
                  <p className="text-sm text-gray-500">
                    Focus
                  </p>

                  <p className="mt-1 text-gray-300">
                    Artificial Intelligence
                  </p>
                </div>


                {/* Machine Learning */}
                <div>
                  <p className="text-sm text-gray-500">
                    Learning
                  </p>

                  <p className="mt-1 text-gray-300">
                    Machine Learning
                  </p>
                </div>


                {/* Programming */}
                <div>
                  <p className="text-sm text-gray-500">
                    Programming
                  </p>

                  <p className="mt-1 text-gray-300">
                    Python
                  </p>
                </div>


                {/* Data */}
                <div>
                  <p className="text-sm text-gray-500">
                    Data
                  </p>

                  <p className="mt-1 text-gray-300">
                    NumPy & Pandas
                  </p>
                </div>


                {/* Goal */}
                <div>
                  <p className="text-sm text-gray-500">
                    Goal
                  </p>

                  <p className="mt-1 text-gray-300">
                    Building intelligent AI systems
                  </p>
                </div>

              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}