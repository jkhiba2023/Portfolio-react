import { useState } from "react";
import { NavigationLinks } from "../data/data";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Home } from "./Components/Home";
import { Skills } from "./Components/Skills";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Project from "./Components/Project";
import { Footer } from "./Components/Footer";

function App() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-600 min-h-screen w-full flex justify-center px-6 md:px-12 relative transition-all duration-500">
      {/* Main Container */}
      <div className="w-full max-w-6xl bg-gray-100 dark:bg-gray-900 dark:text-gray-100 shadow-2xl shadow-black/40 p-3 md:p-12 transition-all duration-500">
        <Home
          toggle={toggle}
          setToggle={setToggle}
          handleToggle={handleToggle}
        />
        <Skills />
        <Project />
        <About />
        <Contact />
        <Footer />
      </div>

      {/* Mobile Modal Menu */}
      <div className="md:hidden fixed top-5 right-8 z-50">
        {!toggle ? (
          <MdMenu
            className="text-gray-100 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full p-2 text-3xl cursor-pointer shadow-lg shadow-black/50 transition-all duration-300 hover:scale-110"
            onClick={handleToggle}
          />
        ) : (
          <RxCross2
            className="text-white text-3xl cursor-pointer transition-all duration-300 hover:scale-110"
            onClick={handleToggle}
          />
        )}
      </div>

      {toggle && (
        <div className="md:hidden fixed inset-0 flex items-center justify-center bg-black/40 bg-opacity-60 z-40 backdrop-blur-sm transition-opacity duration-300">
          <div className="rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 flex flex-col items-center gap-6 w-3/4 max-w-sm shadow-xl shadow-black/50 transition-transform duration-300 animate-scaleUp">
            <nav>
              <ul className="flex flex-col items-center gap-6 text-center">
                {NavigationLinks.map((link, id) => (
                  <li key={id}>
                    <a
                      href={link.link}
                      className="text-gray-300 font-semibold hover:text-white text-xl transition-colors duration-300"
                      onClick={() => setToggle(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
