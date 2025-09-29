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

        if (Array.isArray(data)) {
          setProjects(data);
        } else if (Array.isArray(data.projects)) {
          setProjects(data.projects);
        } else {
          setProjects([]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <section id="project" className="text-gray-800 mt-20 px-4 sm:px-6 md:px-8">
      <div className="space-y-6 text-start">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 border-b-4 border-blue-500 inline-block pb-2">
          Projects
        </h1>
      </div>

      {/* Loading/Error */}
      {loading && <p className="mt-6 text-gray-600 text-center">Loading...</p>}
      {error && <p className="mt-6 text-red-600 text-center">Error: {error}</p>}

      {/* Projects Grid */}
      <div className="mt-10 grid  gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col h-full p-5  rounded-2xl bg-white shadow-2xl shadow-gray-500 hover:shadow-lg hover:scale-110 transition duration-300 ease-in-out"
          >
            {/* {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-40 object-cover rounded-lg mb-4"
              />
            )} */}
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              {project.name}
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-5 flex-grow">
              {project.description}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-gray-900 text-white text-center md:text-4 rounded-lg hover:bg-gray-600 transition"
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
