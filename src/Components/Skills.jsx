import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { skillsData } from "../../data/data";

export const Skills = () => {
  return (
    <section id="skills" className="text-gray-800 mt-10">
      <div className=" space-y-6">
        <h1 className=" mt-20 text-4xl font-extrabold text-gray-900 border-b-4 border-blue-500 inline-block pb-2">
          Skills
        </h1>
        <div className="mt-5 mb-60 flex justify-around gap-5 flex-wrap">
          {skillsData.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.id}
                className="shadow-2xl shadow-gray-500 p-8 rounded-xl 
                   transition-all duration-300 
                   hover:-translate-y-2 hover:shadow-xl 
                   flex flex-col items-center"
              >
                <Icon className={`size-25 ${skill.color}`} />
                {/* <p className="mt-2 text-gray-700 font-semibold">{skill.name}</p> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
