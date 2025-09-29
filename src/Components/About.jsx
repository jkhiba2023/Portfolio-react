export const About = () => {
  return (
    <section id="about" className="text-gray-800 mt-10 mb-20">
      <div className="space-y-10">
        <h1 className="text-4xl font-extrabold text-gray-900 border-b-4 border-blue-500 inline-block pb-2">
          About Me
        </h1>

        <div className="grid grid-cols-1 w-full place-items-center gap-10">
          {/* Left Column */}
          <div className="md:w-full space-y-5 text-gray-700">
            <p>
              Hi, I’m <span className="font-semibold">Jabir Khan</span>, a
              passionate{" "}
              <span className="font-semibold">Front-End Engineer </span>
              with over a year of hands-on experience creating responsive and
              user-friendly websites. My journey began with a strong foundation
              in{" "}
              <span className="font-semibold">HTML, CSS, and JavaScript</span>,
              and I am now expanding my expertise by learning{" "}
              <span className="font-semibold">React 19 </span>
              to build dynamic and interactive applications.
            </p>

            <p>
              I hold a{" "}
              <span className="font-semibold">
                Bachelor of Science in Information Technology
              </span>
              from the{" "}
              <span className="font-semibold">
                University of Mumbai (2016–2020)
              </span>
              . My professional journey has given me exposure to both
              development and non-IT roles, helping me sharpen my{" "}
              <span className="font-semibold">
                analytical, problem-solving, and communication skills
              </span>
              .
            </p>

            <p>
              I enjoy building clean, modern interfaces, paying attention to
              detail, and bringing ideas to life through code. My goal is to
              contribute to impactful projects, continuously learn new
              technologies, and grow into a versatile front-end developer.
            </p>
          </div>

          {/* Right Column */}
          <div className="md:w-lg">
            <div className="bg-gray-900 rounded-2xl p-6  shadow-lg h-full flex flex-col justify-start">
              <h2 className="text-2xl font-bold text-gray-300 mb-4 sm:text-md">
                Experience & Education
              </h2>

              <div className="space-y-6">
                {/* Experience */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-300">
                    Jr Frontend Engineer @ Mak {"{"}Byte{"}"}
                  </h3>
                  <p className="text-gray-400">October 2024 - Present</p>
                  <p className="text-gray-400 tracking-tight">
                    Developed and maintained multiple applications with a focus
                    on performance and accessibility.
                  </p>
                </div>

                {/* Education */}
                <div className=" tracking-tight">
                  <h3 className="text-lg font-semibold text-gray-300">
                    B.Sc. I.T
                  </h3>
                  <p className="text-gray-400">
                    University of Mumbai, 2016-2020
                  </p>
                  <p className="text-gray-400">
                    Graduated in{" "}
                    <span className="font-semibold">
                      Bachelor of Science in Information Technology
                    </span>
                    , specializing in web technologies and user interface
                    design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
