import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiDotnet, SiTypescript } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";

const skills = [
  { name: ".NET", icon: <SiDotnet />, level: 95 },
  { name: "React", icon: <FaReact />, level: 90 },
  { name: "Node.js", icon: <FaNodeJs />, level: 85 },
  { name: "TypeScript", icon: <SiTypescript />, level: 80 },
  { name: "Python", icon: <FaPython />, level: 75 },
  { name: "SQL/DB", icon: <FaDatabase />, level: 85 },
  { name: "Azure - Azure DevOps", icon: <VscAzureDevops />, level: 60 },
  { name: "GitHub - Github Actions", icon: <FaGithub />, level: 80 },
];

const projects = [

  {
    principal: false,
    title: "Geocontrol",
    description:
      "Aplicativo para la gestión y monitoreo de rutas vehiculares en tiempo real.",
    image: "/images/cloud.png",
    link: "#",
    github: "#",
    skills: ["Node.js", "React", "TypeScript", ".NET", "SQL/DB"],
    tech: [
      <FaNodeJs className="text-cyan-400" />,
      <FaReact className="text-cyan-400" />,
      <SiTypescript className="text-cyan-400" />,
      <SiDotnet className="text-cyan-400" />,
      <FaDatabase className="text-cyan-400" />,
      <FaGithub className="text-cyan-400" />,
    ],
  },
  {
    principal: false,
    title: "App de Reportes",
    description:
      "ETL y visualización de datos para reportes ejecutivos de KPIs comerciales.",
    image: "/images/cloud.png",
    link: "#",
    github: "#",
    skills: ["Python", "Azure DevOps", "SQL/DB"],
    tech: [
      <FaPython className="text-cyan-400" />,
      <VscAzureDevops className="text-cyan-400" />,
      <FaDatabase className="text-cyan-400" />,
      <FaGithub className="text-cyan-400" />,
    ],
  },
  {
    principal: true,
    title: "Sistema de Facturación e Inventarios",
    description:
      "Gestión completa de facturación y control de inventarios para canales distribuidos de venta, con integraciones en la nube y ciclo CI/CD.",
    image: "/images/cloud.png",
    link: "#",
    github: "#",
    skills: [".NET", "SQL/DB", "Azure DevOps"],
    tech: [
      <SiDotnet className="text-cyan-400" />,
      <FaDatabase className="text-cyan-400" />,
      <VscAzureDevops className="text-cyan-400" />,
      <FaGithub className="text-cyan-400" />,
    ],
  },
];

export default function ProjectsMenu() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const filteredProjects = selectedSkill
    ? projects.filter((p) => p.skills.includes(selectedSkill))
    : projects;

  return (
    <section
      className="relative flex flex-col md:flex-row min-h-screen 
      bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 
	  transition-colors duration-700 text-white px-6 py-40"
    >
      <div className="grid grid-cols-4 w-full items-start" id="projects">


        {/* === Menú lateral estilo FFVII === */}
        <aside className="col-span-1 border-r border-cyan-800 md:sticky md:top-20 py-5 md:py-16">
          
          <div className="grid grid-cols-4 ">
            
            <div className="col-span-1 border border-cyan-800 p-4 ">
              {/* Título vertical */}
              <h1 class="text-3xl font-bold text-cyan-900 dark:text-white pr-4 transform -rotate-270 origin-top-right">
                Habilidades
              </h1>
            </div>

            <div className="col-span-3 pr-8">
              {/* Lista de skills */}
              <ul className="w-full ">
                {skills.map((skill, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.05, x: 5 }}
                    onClick={() =>
                      setSelectedSkill(
                        selectedSkill === skill.name ? null : skill.name
                      )
                    }
                    className={`flex items-center gap-3 p-3 cursor-pointer transition-all duration-300  border-b border-cyan-800 w-full
                        ${selectedSkill === skill.name
                        ? "bg-cyan-800 border-l-4 border-cyan-400 text-white dark:text-cyan-400"
                        : "hover:bg-cyan-600 hover:text-white text-gray-600 dark:text-gray-200"
                      }`}
                  >
                    <div className="text-cyan-400 text-xl">{skill.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 h-1.5 rounded-full mt-1">
                        <motion.div
                          className="bg-cyan-500 h-1.5 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

        </aside>


        {/* === Proyectos (lado derecho) === */}
        <div className="flex-1 px-4 py-5 md:py-16 md:col-span-3">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-cyan-800 dark:text-white mb-12">
              {selectedSkill ? `Proyectos con ${selectedSkill}` : "Proyectos Destacados"}
            </h2>

            <div className="grid grid-cols-2 gap-6 justify-items-center">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative overflow-hidden rounded-xl shadow-lg group
          w-full max-w-[500px] min-h-[220px] sm:min-h-[250px] md:min-h-[280px]
          cursor-pointer ${project.principal ? "md:col-span-2 max-w-full" : ""}
        `}
                >
                  {/* Imagen */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-center 
            transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Íconos del stack */}
                  <div className="absolute top-3 left-3 flex gap-2 bg-black/40 backdrop-blur-sm p-2 rounded-lg opacity-90">
                    {project.tech.map((icon, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="text-xl text-cyan-400 hover:text-white transition-colors duration-300"
                      >
                        {icon}
                      </motion.div>
                    ))}
                  </div>

                  {/* Overlay animado */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t 
              from-cyan-900/90 to-transparent 
              dark:from-cyan-900/90 dark:to-transparent
              opacity-0 group-hover:opacity-100 transition-opacity 
              duration-700 flex flex-col justify-end p-5"
                  >
                    <h3 className="text-xl font-semibold mb-1 text-left">{project.title}</h3>
                    <p className="text-gray-300 mb-3 text-sm line-clamp-3 text-left">
                      {project.description}
                    </p>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        className="text-gray-300 hover:text-white text-lg"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        className="text-gray-300 hover:text-white text-lg"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>


    </section>
  );
}
