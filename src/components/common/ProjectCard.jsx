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
      w-200 h-[25em] md:h-[40em] cursor-pointer bg-black/20 backdrop-blur-sm"
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover object-center 
        transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute top-3 left-3 flex gap-2 bg-black/40 backdrop-blur-sm p-2 rounded-lg">
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

      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/90 to-transparent 
      opacity-0 group-hover:opacity-100 transition-opacity duration-700 
      flex flex-col justify-end p-5">
        <h3 className="text-xl font-semibold mb-1 text-left">{project.title}</h3>
        <p className="text-gray-300 mb-3 text-sm line-clamp-3 text-left">
          {project.description}
        </p>

        <div className="flex gap-4">
          <a href={project.github} target="_blank" className="text-gray-300 hover:text-white text-lg">
            <FaGithub />
          </a>
          <a href={project.link} target="_blank" className="text-gray-300 hover:text-white text-lg">
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
