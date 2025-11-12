import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaGithub,
  FaAws,
  FaDocker
} from "react-icons/fa";
import { SiDotnet, SiTypescript, SiBlazor } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { useState, useEffect } from "react";
import ProjectCard from "@/components/common/ProjectCard";
import useSound from 'use-sound';


function ProjectsMenu() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const [showButton, setShowButton] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const skills = [
    { name: ".NET", icon: <SiDotnet />, level: "Mid" },
    { name: "React (TypeScript y Javascript)", icon: <FaReact />, level: "Mid" },
    { name: "Node.js", icon: <FaNodeJs />, level: "Mid" },
    { name: "Python", icon: <FaPython />, level: "Mid" },
    { name: "SQL/DB", icon: <FaDatabase />, level: "Mid" },
    { name: "Azure - Azure DevOps", icon: <VscAzureDevops />, level: "Mid" },
    { name: "GitHub - Github Actions", icon: <FaGithub />, level: "Mid" },
    { name: "Blazor", icon: <SiBlazor />, level: "Junior" },
    { name: "Docker", icon: <FaDocker />, level: "Junior" },
    { name: "AWS", icon: <FaAws />, level: "Junior" },

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
      skills: ["Node.js", "React (TypeScript y Javascript)", ".NET", "SQL/DB", "GitHub - Github Actions", "Docker", "AWS"],
      tech: [
        <FaNodeJs className="text-cyan-400" />,
        <FaReact className="text-cyan-400" />,
        <SiTypescript className="text-cyan-400" />,
        <SiDotnet className="text-cyan-400" />,
        <FaDatabase className="text-cyan-400" />,
        <FaDocker className="text-cyan-400" />,
        <FaGithub className="text-cyan-400" />,
        <FaAws className="text-cyan-400" />
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
      skills: ["Python", "Azure DevOps", "SQL/DB", "GitHub - Github Actions", "Docker"],
      tech: [
        <FaPython className="text-cyan-400" />,
        <VscAzureDevops className="text-cyan-400" />,
        <FaDatabase className="text-cyan-400" />,
        <FaGithub className="text-cyan-400" />,
        <FaDocker className="text-cyan-400" />,
      ],
    },
    {
      principal: true,
      title: "Sistema de Facturación e Inventarios",
      description:
        "Gestión completa de facturación y control de inventarios para canales distribuidos de venta, con integraciones a SAP, DIAN y ciclo CI/CD.",
      image: "/images/cloud.png",
      link: "#",
      github: "#",
      skills: [".NET", "SQL/DB", "Azure - Azure DevOps", "GitHub - Github Actions", "Blazor"],
      tech: [
        <SiDotnet className="text-cyan-400" />,
        <FaDatabase className="text-cyan-400" />,
        <VscAzureDevops className="text-cyan-400" />,
        <FaGithub className="text-cyan-400" />,
        <SiBlazor className="text-cyan-400" />,
      ],
    },
    {
      principal: true,
      title: "Sistemas de Inventarios y Pesajes",
      description:
        "Gestión completa de inventarios y revisión de canales para sistema de planta de beneficio y sacrificio, con integración a SAP y con básculas.",
      image: "/images/cloud.png",
      link: "#",
      github: "#",
      skills: [".NET", "SQL/DB", "Azure - Azure DevOps", "GitHub - Github Actions"],
      tech: [
        <SiDotnet className="text-cyan-400" />,
        <FaDatabase className="text-cyan-400" />,
        <VscAzureDevops className="text-cyan-400" />,
        <FaGithub className="text-cyan-400" />
      ],
    },
    {
      principal: true,
      title: "Sistemas de Integración con SAP/4 Hana",
      description:
        "Gestión completa de inventarios y revisión de canales para sistema de planta de beneficio y sacrificio, con integración a SAP y con básculas.",
      image: "/images/cloud.png",
      link: "#",
      github: "#",
      skills: [".NET", "SQL/DB", "Azure - Azure DevOps", "GitHub - Github Actions"],
      tech: [
        <SiDotnet className="text-cyan-400" />,
        <FaDatabase className="text-cyan-400" />,
        <VscAzureDevops className="text-cyan-400" />,
        <FaGithub className="text-cyan-400" />
      ],
    },
    {
      principal: true,
      title: "Sistemas de Integración con SAP Business One",
      description:
        "Gestión completa de inventarios y revisión de canales para sistema de planta de beneficio y sacrificio, con integración a SAP y con básculas.",
      image: "/images/cloud.png",
      link: "#",
      github: "#",
      skills: [".NET", "SQL/DB", "Azure - Azure DevOps", "GitHub - Github Actions"],
      tech: [
        <SiDotnet className="text-cyan-400" />,
        <FaDatabase className="text-cyan-400" />,
        <VscAzureDevops className="text-cyan-400" />,
        <FaGithub className="text-cyan-400" />
      ],
    },
    {
      principal: true,
      title: "Sistemas de Facturación Electrónica",
      description:
        "Gestión completa de inventarios y revisión de canales para sistema de planta de beneficio y sacrificio, con integración a SAP y con básculas.",
      image: "/images/cloud.png",
      link: "#",
      github: "#",
      skills: [".NET", "SQL/DB", "Azure - Azure DevOps", "GitHub - Github Actions"],
      tech: [
        <SiDotnet className="text-cyan-400" />,
        <FaDatabase className="text-cyan-400" />,
        <VscAzureDevops className="text-cyan-400" />,
        <FaGithub className="text-cyan-400" />
      ],
    },
  ];

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY && !isMenuOpen) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  const filteredProjects = selectedSkill
    ? projects.filter((p) => p.skills.includes(selectedSkill))
    : projects;

  const [currentIndex, setCurrentIndex] = useState(0);

  const maxVisible = 3; // máximo proyectos visibles a la vez
  const total = filteredProjects.length;
  const canSlide = total > maxVisible;

  const next = () => {
    if (canSlide) setCurrentIndex((prev) => Math.min(prev + 1, total - maxVisible));
  };

  const prev = () => {
    if (canSlide) setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const [playItemChange, { stopItemChange }] = useSound('https://www.dropbox.com/s/fiyx4q2mdwynraj/FF7CursorMove.mp3?raw=1');

  return (
    <section
      className="flex flex-col items-center justify-center md:flex-row min-h-screen
            bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 
            px-6 transition-colors duration-700 pb-10 pt-10"
    >


      {/* Botón Menu Habilidades*/}
      <motion.button
        onClick={() => { setIsMenuOpen(!isMenuOpen); setShowButton(false); playItemChange(); }}
        animate={{ opacity: showButton ? 1 : 0, y: showButton ? 0 : -10 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="
          fixed left-4 bottom-6            
          md:top-20 md:left-4 md:bottom-auto  

          bg-cyan-900 dark:bg-white 
          px-4 py-2 rounded-full shadow 
          hover:scale-105
          transition-transform duration-300
          z-50
          text-white dark:text-black cursor-pointer
        "
      >
        {isMenuOpen ? "Cerrar" : "Habilidades"}
      </motion.button>

      <div className="relative w-full min-h-screen " id="projects">

        {/* === Menú lateral  === */}
        <motion.aside
          initial={{ x: -400 }}
          animate={{ x: isMenuOpen ? 0 : -400 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="
      fixed top-0 left-0 h-full w-80 z-40
      bg-gray-900 border-r border-cyan-800
      overflow-y-auto
    "
        >
          <div className="p-6 space-y-6">

            <h1 className="text-2xl font-bold text-cyan-400 mt-10">
              Habilidades
            </h1>

            <ul className="space-y-2">
              {skills.map((skill, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05, x: 6 }}
                  onClick={() =>
                    setSelectedSkill(selectedSkill === skill.name ? null : skill.name)
                  }
                  className={`flex items-center gap-3 p-3 w-full border-b border-cyan-800 cursor-pointer transition-all duration-300
              ${selectedSkill === skill.name
                      ? "bg-cyan-800 text-white border-l-4 border-cyan-400"
                      : "text-gray-300 hover:bg-cyan-600 hover:text-white"
                    }
            `}
                >
                  <div className="text-cyan-400 text-xl mr-2">{skill.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{skill.name}</span>

                    </div>
                    <div className="w-full  mt-1">
                      <span>Nivel: {skill.level}</span></div>
                    {/* <div className="w-full bg-gray-700/50 h-1.5 rounded-full mt-1">
                      <motion.div
                        className="bg-cyan-500 h-1.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div> */}
                  </div>
                </motion.li>
              ))}

              <button
                onClick={() => { setIsMenuOpen(false); playItemChange(); }}
                className="mt-6 w-full bg-cyan-800 hover:bg-cyan-600 text-white font-medium py-2 rounded-lg transition-colors duration-300 cursor-pointer "
              >
                Cerrar
              </button>
            </ul>

          </div>
        </motion.aside>

        {/* === Carrusel pantalla completa === */}
        <div className="flex items-center justify-center w-full h-full px-2">
          <div className="w-full text-center">

            <h2 className="text-3xl font-bold text-cyan-800 dark:text-white mb-2">
              {selectedSkill ? `Proyectos con ${selectedSkill}` : "Proyectos Destacados"}
            </h2>
            <h3 className="text-1xl text-cyan-800 dark:text-white mb-12">
              (Filtra por habilidad usando el botón de Habilidades)
            </h3>

            {/* === Desktop Carrusel === */}
            <div className="hidden md:flex items-center gap-2 relative justify-center w-full h-[70vh]">
              {canSlide && (
                <button
                  onClick={() => {
                    prev();
                    playItemChange();
                  }}
                  className="px-4 py-16 bg-cyan-700/80 hover:bg-cyan-600 text-white rounded-2xl shadow-lg transition-all cursor-pointer mr-10"
                >
                  ‹
                </button>
              )}

              <div className="overflow-hidden w-200 h-full transition-all duration-500">
                <div
                  className="flex transition-transform duration-500 h-full"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / maxVisible)}%)`,
                  }}
                >
                  {filteredProjects.map((project, index) => (
                    <div
                      key={index}
                      className="w-1/3 flex-shrink-0 flex justify-center h-full"
                    >
                      <ProjectCard project={project} index={index} fullHeight />
                    </div>
                  ))}
                </div>
              </div>

              {canSlide && (
                <button
                  onClick={() => {
                    next();
                    playItemChange();
                  }}
                  className="px-4 py-16 bg-cyan-700/80 hover:bg-cyan-600 text-white rounded-2xl shadow-lg transition-all cursor-pointer ml-10"
                >
                  ›
                </button>
              )}
            </div>

            {/* === Mobile: vista normal (sin carrusel) === */}
            <div className="grid grid-cols-1 gap-6 justify-items-center md:hidden">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>

          </div>
        </div>

      </div>

    </section >
  );
}

export default ProjectsMenu;