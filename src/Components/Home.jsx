import { FaDownload } from "react-icons/fa";
import { NavigationLinks } from "../../data/data";

export const Home = ({ toggle, setToggle, handleToggle }) => {
  return (
    <section id="home" className="relative w-full">
      {/* Desktop Navigation */}
      <header className="hidden md:flex justify-center mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 p-3 rounded-3xl fixed top-5 left-1/2 transform -translate-x-1/2 shadow-xl shadow-black/40 z-50">
        <nav>
          <ul className="flex justify-center gap-6">
            {NavigationLinks.map((link, id) => (
              <li
                key={id}
                className="text-gray-300 font-semibold hover:text-white transition-colors duration-300"
              >
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-28 md:mt-36 px-4 md:px-0">
        <h1 className="font-extrabold text-3xl md:text-5xl mb-4 text-gray-700">
          Frontend Engineer
        </h1>
        <h2 className="font-bold text-xl md:text-5xl mb-4">
          Hello, my name is{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Jabir Khan
          </span>
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed mb-8 px-2 md:px-0">
          As a Front-End Engineer with 1.5 years of professional experience, I
          specialize in building responsive and user-friendly websites using
          HTML, CSS, JavaScript, and React. I prioritize clean code practices,
          performance optimization, and seamless user experiences, while
          actively upgrading my skills to stay aligned with evolving industry
          trends.
        </p>

        {/* Download CV Button */}
        <a
          className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-pink-500/40 hover:scale-105 hover:shadow-xl transition-all duration-300"
          download
          href="/Resume/Frontend_Engineer.pdf"
        >
          Download CV <FaDownload size={18} className="ml-1" />
        </a>
      </div>
    </section>
  );
};
