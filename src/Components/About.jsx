export const About = () => {
  return (
    <section id="about" className="mt-24 px-4 md:px-0">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-600 border-b-4 border-blue-500 inline-block pb-2">
          About Me
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Column */}
        <div className="text-gray-700 space-y-6 text-base md:text-lg leading-relaxed tracking-wider">
          <p>
            Hi, I’m{" "}
            <span className="font-semibold text-gray-900">Jabir Khan</span>, a
            passionate{" "}
            <span className="font-semibold text-gray-900 ">
              Front-End Engineer{" "}
            </span>
            with over a year of hands-on experience creating responsive and
            user-friendly websites. My journey began with a strong foundation in{" "}
            <span className="font-semibold text-gray-900">
              HTML, CSS, and JavaScript
            </span>
            , and I am now expanding my expertise by learning{" "}
            <span className="font-semibold text-gray-900">React 19</span>
            to build dynamic and interactive applications.
          </p>

          <p>
            I hold a{" "}
            <span className="font-semibold text-gray-900">
              Bachelor of Science in Information Technology
            </span>
            from the{" "}
            <span className="font-semibold text-gray-900">
              University of Mumbai (2016–2020)
            </span>
            . My professional journey has given me exposure to both development
            and non-IT roles, helping me sharpen my
            <span className="font-semibold text-gray-900">
              {" "}
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
        <div>
          <div className="bg-gray-900 rounded-3xl p-6 shadow-2xl tracking-wider shadow-black/40 h-full flex flex-col transition-transform duration-300 hover:scale-[1.03]">
            <h2 className="text-2xl font-bold text-white mb-6">
              Experience & Education
            </h2>

            <div className="space-y-6">
              {/* Experience */}
              <div>
                <h3 className="text-lg font-semibold text-blue-400">
                  Frontend Engineer @ Mak {"{"}Byte{"}"}
                </h3>
                <p className="text-gray-300">October 2024 - Present</p>
                <p className="text-gray-400 mt-1 text-sm md:text-base">
                  Developed and maintained multiple applications with a focus on
                  performance and accessibility.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-400">
                  Jr Dot Net Developer @ Mobilestyx Consulting and Solutions Pvt
                  Ltd
                </h3>
                <p className="text-gray-300">May 2024 - September 2024</p>
                <p className="text-gray-400 mt-1 text-sm md:text-base">
                  Completed internship with hands-on experience in full-stack
                  development, including frontend design, backend logic, and
                  database integration with CRUD functionality.
                </p>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-lg font-semibold text-blue-400">
                  B.Sc. I.T
                </h3>
                <p className="text-gray-300">University of Mumbai, 2016-2020</p>
                <p className="text-gray-400 mt-1 text-sm md:text-base">
                  Graduated in{" "}
                  <span className="font-semibold text-white">
                    Bachelor of Science in Information Technology
                  </span>
                  , specializing in web technologies and user interface design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
