import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      style={{ transformOrigin: "center" }}
      viewport={{ once: true }}
      className="relative overflow-hidden shadow-lg group
  w-full sm:w-200 h-[25em] md:h-[40em] cursor-pointer"
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover object-center 
    transition-transform duration-700 group-hover:scale-110"
      />

      {/* === Iconos superiores === */}
      <div className="absolute top-3 right-3 flex flex-col gap-2 bg-black/40 backdrop-blur-sm p-2 rounded-lg">
        {project.tech.map((icon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.1 }}
            className="text-xl text-cyan-400 group-hover:text-white transition-colors duration-300"
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* === Overlay inferior === */}
      <div
        className="absolute inset-0 bg-cyan-900/90
        opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 
        flex flex-col justify-end p-5 overflow-y-auto md:overflow-hidden"
      >
        {/* === Iconos superiores === */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 bg-black/40 backdrop-blur-sm p-2 rounded-lg md:hidden">
          {project.tech.map((icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              className="text-xl text-cyan-400 group-hover:text-white transition-colors duration-300"
            >
              {icon}
            </motion.div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-1 xs:pr-4 md:pr-0 text-left text-white">{project.title}</h3>
        <p className="text-white mb-3 mt-3 xs:pr-4 md:pr-0 text-sm text-left">
          {project.description}
        </p>

        <div className="flex gap-4 mt-auto">
          <a
            href={project.github}
            target="_blank"
            className="text-white hover:text-white text-lg"
          >
            <FaGithub />
          </a>
          <a
            href={project.link}
            target="_blank"
            className="text-white hover:text-white text-lg"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>

    </motion.div>

  );
}
