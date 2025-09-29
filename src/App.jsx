import { useState } from "react";
import { NavigationLinks } from "../data/data";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Home } from "./Components/Home";
import { Skills } from "./Components/Skills";
import { MdMenu } from "react-icons/md";
import { RxCross2, RxCrosshair2 } from "react-icons/rx";
import Project from "./Components/Project";

function App() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-gray-900 min-h-screen w-full flex justify-center px-6 md:px-12 relative">
      {/* Main Container */}
      <div className="w-11/12 max-w-7xl bg-white shadow-lg shadow-gray-300 px-8 py-10">
        <Home
          toggle={toggle}
          setToggle={setToggle}
          handleToggle={handleToggle}
        />
        <Skills />
        <Project />
        <About />

        <Contact />
      </div>

      {/* Mobile Modal Menu */}
      <div className="md:hidden fixed top-4 right-16 z-50">
        {!toggle ? (
          <MdMenu
            className="text-black bg-white rounded-full text-3xl cursor-pointer"
            onClick={handleToggle}
          />
        ) : (
          <RxCross2
            className="text-white text-3xl cursor-pointer"
            onClick={handleToggle}
          />
        )}
      </div>
      {toggle && (
        <div className="md:hidden fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-40">
          <div className="bg-gray-900 rounded-2xl p-8 flex flex-col items-center gap-6 w-3/4 max-w-sm">
            <nav>
              <ul className="flex flex-col items-center gap-6 text-center">
                {NavigationLinks.map((link, id) => (
                  <li key={id}>
                    <a
                      href={link.link}
                      className="text-gray-300 font-bold hover:text-white text-xl transition-colors duration-300"
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
