import { FaGithub, FaLinkedin } from "react-icons/fa";
import RevealOnScroll from "@/components/common/RevealOnScroll";

const About = () => {
    return (
        <section
            id="about"
            className="flex flex-col items-center justify-center text-center min-h-screen 
            bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 
            px-6 transition-colors duration-700"
        >
            {/* Animación de entrada */}
            <RevealOnScroll
                once={false}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto"
            >
                <h2 className="text-4xl font-bold mb-6 text-cyan-900 dark:text-white">
                    Sobre mí
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg ">
                    Hola, me alegra que estés aquí, <br />
                    Me llamo <span className="font-bold text-cyan-700">Juanes Sepúlveda</span>,
                    trabajo como desarrollador <span className="text-cyan-700 font-bold">Full Stack</span> apasionado por
                    crear soluciones tecnológicas que combinen funcionalidad, rendimiento y una excelente
                    experiencia de usuario. <br />
                    Disfruto de proveer soluciones innovadoras y eficientes que impulsen el éxito de los proyectos en
                    los que participo.
                </p>

                {/* Animación de íconos */}
                <RevealOnScroll
                    once={false}
                    className="flex justify-center gap-6 mt-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <a
                        href="https://github.com/tuusuario"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 text-3xl transition-transform transform hover:scale-110"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/tu-perfil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 text-3xl transition-transform transform hover:scale-110"
                    >
                        <FaLinkedin />
                    </a>
                </RevealOnScroll>
            </RevealOnScroll>

        </section>
    );
};

export default About;
