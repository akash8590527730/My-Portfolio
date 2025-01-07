import React, { useEffect } from 'react';
import { PROJECTS } from '../constants';
import { FaGithub } from 'react-icons/fa'; // Importing the GitHub icon from react-icons
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

// Utility function to get background color for each technology
const getTechColor = (tech) => {
  const colors = {
    HTML: 'bg-red-500',
    CSS: 'bg-blue-500',
    JavaScript: 'bg-yellow-500',
    React: 'bg-cyan-500',
    Node: 'bg-green-600',
    MongoDB: 'bg-green-400',
    Angular: 'bg-red-600',
    Firebase: 'bg-orange-500',
    Bootstrap: 'bg-purple-500',
    Vue: 'bg-green-500',
    Express: 'bg-gray-600',
    mySQL: 'bg-blue-400',
  };
  return colors[tech] || 'bg-gray-500'; // Default color if tech is not in the mapping
};

const Projects = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Set animation duration
  }, []);

  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl" data-aos="fade-up">
        My Projects
      </h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            data-aos="fade-up"
            data-aos-delay="300" // Delay animation to stagger the effect
          >
            {/* Image Section with Animation from Left */}
            <div
              className="w-full lg:w-1/4"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded-lg shadow-lg"
              />
            </div>

            {/* Project Details with Animation from Right */}
            <div
              className="w-full max-w-xl lg:w-3/4"
              data-aos="fade-right"
              data-aos-delay="700"
            >
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="text-stone-400">{project.description}</p>
              <div className="mt-2 flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`mr-2 mb-2 rounded p-2 text-sm font-medium text-white ${getTechColor(
                      tech
                    )}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* GitHub Link Section */}
              {project.github && (
                <div className="mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-500 hover:text-blue-700"
                  >
                    <FaGithub className="mr-2" />
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
