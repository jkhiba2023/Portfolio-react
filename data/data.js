import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
export const NavigationLinks = [
  { id: Date.now(), name: "Home", link: "#home" },
  { id: Date.now(), name: "Skills", link: "#skills" },
  { id: Date.now(), name: "Project", link: "#project" },
  { id: Date.now(), name: "About", link: "#about" },
  { id: Date.now(), name: "Contact", link: "#contact" },]

export const skillsData = [
  { id: 1, icon: FaHtml5, color: "text-orange-600", name: "HTML5" },
  { id: 2, icon: FaCss3Alt, color: "text-sky-700", name: "CSS3" },
  { id: 3, icon: FaJsSquare, color: "text-yellow-400", name: "JavaScript" },
  { id: 4, icon: FaReact, color: "text-cyan-400", name: "React" },
  { id: 5, icon: RiTailwindCssFill, color: "text-sky-400", name: "Tailwind CSS" },
];
