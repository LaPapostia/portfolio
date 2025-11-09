import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiDotnet, SiSharp, SiSqlalchemy, SiJavascript, SiPython } from "react-icons/si";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import { VscAzure } from "react-icons/vsc";

const TechStack = () => {
    const technologies = [
        { name: "C#", icon: <SiSharp className="text-cyan-900 dark:text-cyan-900" /> },
        { name: "Python", icon: <SiPython className="text-cyan-400 dark:white" /> },
        { name: ".NET", icon: <SiDotnet className="text-cyan-900 dark:text-cyan-900" /> },
        { name: "SQL Server", icon: <SiSqlalchemy className="text-cyan-400 dark:white" /> },
        { name: "Azure", icon: <VscAzure className="text-cyan-900 dark:text-cyan-900" /> },
        { name: "React", icon: <FaReact className="text-cyan-400 dark:white" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-900 dark:text-cyan-900" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-cyan-400 dark:white" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-cyan-900 dark:text-cyan-900" /> },
        { name: "Docker", icon: <FaDocker className="text-cyan-400 dark:white" /> },
        { name: "Git", icon: <FaGitAlt className="text-cyan-900 dark:text-cyan-900" /> },
    ];

    return (
        <section
            id="tech"
            className="relative min-h-screen flex flex-col items-center 
            justify-center px-6 py-20
             bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 px-6
             transition-colors duration-700"
        >
            <RevealOnScroll
                once={true}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl mb-8 pb-5 font-extrabold text-cyan-900 dark:text-white">
                    Tecnologías y Herramientas
                </h2>
            </RevealOnScroll>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-8">
                {technologies.map((tech, index) => (
                    <RevealOnScroll once={true} key={tech.name} delay={index * 0.05}>
                        <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/10 dark:bg-gray-800/40 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                            <div className="text-5xl">{tech.icon}</div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">{tech.name}</p>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>

            {/* Fondo blur decorativo */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400" />
        </section>
    );
};

export default TechStack;
