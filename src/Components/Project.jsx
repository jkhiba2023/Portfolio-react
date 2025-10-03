import { useEffect, useState } from "react";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let url =
        "https://raw.githubusercontent.com/jkhiba2023/portfolioProjectData/refs/heads/main/projects.json";
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        if (Array.isArray(data)) setProjects(data);
        else if (Array.isArray(data.projects)) setProjects(data.projects);
        else setProjects([]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <section id="project" className="mt-24 px-4 sm:px-6 md:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-600 border-b-4 border-blue-500 inline-block pb-2">
          Projects
        </h1>
      </div>

      {/* Loading/Error */}
      {loading && <p className="mt-6 text-gray-400 text-center">Loading...</p>}
      {error && <p className="mt-6 text-red-500 text-center">Error: {error}</p>}

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-between h-full p-6 rounded-2xl bg-gray-800 text-gray-100 shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Optional image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
            )}

            <div className="flex-grow">
              <h2 className="text-xl font-bold mb-2">{project.name}</h2>
              <p className="text-gray-100 tracking-wider font-thin line-clamp-4 text-sm md:text-xsm">
                {project.description}
              </p>
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold text-center rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
