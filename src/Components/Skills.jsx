import { skillsData } from "../../data/data";

export const Skills = () => {
  return (
    <section id="skills" className="mt-24 mb-16 px-4 md:px-0">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-600 border-b-4 border-blue-500 inline-block pb-2">
          Skills
        </h1>
      </div>

      <div className="flex flex-wrap gap-8 justify-around">
        {skillsData.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.id}
              className="w-40 h-40 bg-gray-800 text-gray-100 shadow-lg shadow-black/30 rounded-2xl flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl"
            >
              <Icon className={`text-6xl ${skill.color}`} />
              <p className="mt-4 font-semibold text-lg text-white text-center">
                {skill.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
