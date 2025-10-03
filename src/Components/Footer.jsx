import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className=" text-gray-600 mt-24">
      <div className=" px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Branding */}
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Jabir Khan. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/jkhiba2023"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition transform hover:scale-110"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/jabir-khan-1833a637b"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gradient-to-r text-white from-blue-500 to-blue-700 rounded-full hover:brightness-110 transition transform hover:scale-110"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:jabirkhan4748@gmail.com"
            className="p-2 bg-red-600 rounded-full text-white hover:brightness-110 transition transform hover:scale-110"
          >
            <SiGmail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
