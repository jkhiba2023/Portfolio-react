import { FaDownload } from "react-icons/fa";
import { NavigationLinks } from "../../data/data";

export const Home = ({ toggle, setToggle, handleToggle }) => {
  return (
    <section className="container">
      {/* Desktop Navigation */}
      <section id="home" className="nav hidden md:flex justify-center mb-10">
        <header className="navBar flex justify-center mt-4 bg-gray-900 p-3 rounded-2xl fixed top-0 ">
          <nav>
            <ul className="flex justify-center gap-3">
              {NavigationLinks.map((link, id) => {
                return (
                  <li
                    className="text-gray-300 font-bold hover:text-white transition-colors duration-300"
                    key={id}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
      </section>

      {/* Mobile Navigation Toggle */}

      {/* Hero Section */}
      <section>
        <div className="text-center">
          <h1 className="font-bold text-3xl md:text-5xl mt-28 mb-5">
            Frontend Engineer
          </h1>
          <h3 className="font-bold text-xl md:text-3xl tracking-wide mb-3">
            Hello, my name is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Jabir Khan
            </span>
          </h3>
          <p className="text-sm md:text-base/7 px-1 md:px-5 tracking-wide">
            As a Front-End Engineer with 1.5 years of professional experience, I
            specialize in building responsive and user-friendly websites using
            HTML, CSS, JavaScript, and React. I prioritize clean code practices,
            performance optimization, and seamless user experiences, while
            actively upgrading my skills to stay aligned with evolving industry
            trends.
          </p>
          <div className="mt-10">
            <a
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-3 rounded-xl shadow-lg shadow-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-700/60"
              download
              href="/Resume/Frontend_Engineer.pdf"
            >
              Download CV{" "}
              <FaDownload
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};
