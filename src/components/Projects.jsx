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
import { useTranslation, Trans } from "react-i18next";
import "@/hooks/i18n";

function ProjectsMenu() {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const [showButton, setShowButton] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const skills = [
    { name: t("skills..NET"), icon: <SiDotnet />, level: t("skills.Mid") },
    { name: t("skills.React (Ts y Js)"), icon: <FaReact />, level: t("skills.Mid") },
    { name: t("skills.Node.js"), icon: <FaNodeJs />, level: t("skills.Mid") },
    { name: t("skills.Python"), icon: <FaPython />, level: t("skills.Mid") },
    { name: t("skills.SQL"), icon: <FaDatabase />, level: t("skills.Mid") },
    { name: t("skills.Azure - Azure DevOps"), icon: <VscAzureDevops />, level: t("skills.Mid") },
    { name: t("skills.GitHub - GitHub Actions"), icon: <FaGithub />, level: t("skills.Mid") },
    { name: t("skills.Blazor"), icon: <SiBlazor />, level: t("skills.Junior") },
    { name: t("skills.Docker"), icon: <FaDocker />, level: t("skills.Junior") },
    { name: t("skills.AWS"), icon: <FaAws />, level: t("skills.Junior") }
  ];


  const projects = [
    {
      principal: false,
      title: t("projects.0.title"),
      description: t("projects.0.description"),
      image: "/images/mako.png",
      link: "#",
      github: "#",
      skills: ["Node.js", "React (Ts y Js)", ".NET", "SQL Server", "GitHub - GitHub Actions", "Docker", "AWS"],
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
      title: t("projects.1.title"),
      description: t("projects.1.description"),
      image: "/images/mako.png",
      link: "#",
      github: "#",
      skills: ["Python", "Azure - Azure DevOps", "SQL Server", "GitHub - GitHub Actions", "Docker"],
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
      title: t("projects.2.title"),
      description: t("projects.2.description"),
      image: "/images/mako.png",
      link: "#",
      github: "#",
      skills: [".NET", "SQL Server", "Azure - Azure DevOps", "GitHub - GitHub Actions", "Blazor"],
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
      title: t("projects.3.title"),
      description: t("projects.3.description"),
      image: "/images/mako.png",
      link: "#",
      github: "#",
      skills: [".NET", "SQL Server", "Azure - Azure DevOps", "GitHub - GitHub Actions"],
      tech: [
        <SiDotnet className="text-cyan-400" />,
        <FaDatabase className="text-cyan-400" />,
        <VscAzureDevops className="text-cyan-400" />,
        <FaGithub className="text-cyan-400" />,
      ],
    },
    {
      principal: true,
      title: t("projects.4.title"),
      description: t("projects.4.description"),
      image: "/images/mako.png",
      link: "#",
      github: "#",
      skills: [".NET", "SQL Server", "Azure - Azure DevOps", "GitHub - GitHub Actions"],
      tech: [
        <SiDotnet className="text-cyan-400" />,
        <FaDatabase className="text-cyan-400" />,
        <VscAzureDevops className="text-cyan-400" />,
        <FaGithub className="text-cyan-400" />,
      ],
    },
    {
      principal: true,
      title: t("projects.5.title"),
      description: t("projects.5.description"),
      image: "/images/mako.png",
      link: "#",
      github: "#",
      skills: [".NET", "SQL Server", "Azure - Azure DevOps", "GitHub - GitHub Actions"],
      tech: [
        <SiDotnet className="text-cyan-400" />,
        <FaDatabase className="text-cyan-400" />,
        <VscAzureDevops className="text-cyan-400" />,
        <FaGithub className="text-cyan-400" />,
      ],
    },
    {
      principal: true,
      title: t("projects.6.title"),
      description: t("projects.6.description"),
      image: "/images/mako.png",
      link: "#",
      github: "#",
      skills: [".NET", "SQL Server", "Azure - Azure DevOps", "GitHub - GitHub Actions"],
      tech: [
        <SiDotnet className="text-cyan-400" />,
        <FaDatabase className="text-cyan-400" />,
        <VscAzureDevops className="text-cyan-400" />,
        <FaGithub className="text-cyan-400" />,
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
        {isMenuOpen ? t("button_close") : t("skills_text")}
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
              {t("skills_text")}
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
                      <span>{skill.level}</span></div>
                  </div>
                </motion.li>
              ))}

              <button
                onClick={() => { setIsMenuOpen(false); playItemChange(); }}
                className="mt-6 w-full bg-cyan-800 hover:bg-cyan-600 text-white font-medium py-2 rounded-lg transition-colors duration-300 cursor-pointer "
              >
                {t("button_close")}
              </button>
            </ul>

          </div>
        </motion.aside>

        {/* === Carrusel pantalla completa === */}
        <div className="flex items-center justify-center w-full h-full px-2">
          <div className="w-full text-center">

            <h2 className="text-3xl font-bold text-cyan-800 dark:text-white mb-2">
              {selectedSkill ? `${t("projects_with")}${selectedSkill}` : t("featured_projects")}
            </h2>
            <h3 className="text-1xl text-cyan-800 dark:text-white mb-12">
              {t("filter_projects_text")}
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