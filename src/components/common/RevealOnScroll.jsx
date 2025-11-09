import { motion } from "framer-motion";

/**
 * Componente de animación reusable que muestra su contenido
 * solo cuando entra en el viewport (scroll visible).
 *
 * Ejemplo de uso:
 * <RevealOnScroll>
 *   <h2>Sección</h2>
 *   <p>Contenido</p>
 * </RevealOnScroll>
 */
const RevealOnScroll = ({
  children,
  delay = 0,
  yOffset = 40,
  duration = 0.6,
  once = true,
  className = "",
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
