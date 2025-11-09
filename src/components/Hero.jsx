import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import useDarkMode from "@/hooks/useDarkMode";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import { FaHome, FaUser, FaCode, FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import useSound from 'use-sound';

function Hero() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [showButton, setShowButton] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [totalPlayed, setTotalPlayed] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false);
  const [splashVisible, setSplashVisible] = useState(true);

  // Menu items
  const menuItems = [
    { label: "Inicio", href: "#hero", icon: <FaHome /> },
    { label: "Sobre mí", href: "#about", icon: <FaUser /> },
    { label: "Proyectos", href: "#projects", icon: <FaCode /> },
    { label: "Salir", href: "#contact", icon: <FaSignOutAlt /> },
  ];

  // Handle start from splash screen
  const handleStart = () => {
    playItemChange();
    setSplashVisible(false);
  };

  // Start game on any key press
  useEffect(() => {
    if (!splashVisible) return;

    const handleKeyStart = () => {
      handleStart();
    };

    window.addEventListener("keydown", handleKeyStart);
    return () => window.removeEventListener("keydown", handleKeyStart);
  }, [splashVisible]);

  // Initialize time from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("totalPlayed")
    setTotalPlayed(stored ? JSON.parse(stored) : 1)
  }, [])

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTotalPlayed((prev) => {
        const newTime = prev + 1
        localStorage.setItem("totalPlayed", JSON.stringify(newTime))
        return newTime
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const [playItemChange, { stopItemChange }] = useSound('https://www.dropbox.com/s/fiyx4q2mdwynraj/FF7CursorMove.mp3?raw=1');
  const [playItemSelected, { stopItemSelected }] = useSound('https://www.dropbox.com/s/v04ewrevpnnsz03/FF7CursorSaveLoad.mp3?raw=1');

  function formatTime(seconds) {
    if (seconds >= 360000) {
      return "99:99:99"
    }
    const hh = Math.floor(seconds / 3600)
    const mm = Math.floor((seconds % 3600) / 60)
    const ss = seconds % 60
    return `${hh}:${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`
  }

  function formatGil(gil) {
    return gil.toLocaleString()
  }


  if (splashVisible) {
    return (
      <AnimatePresence>
        {splashVisible && (
          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white 
          text-3xl select-none cursor-pointer z-[9999]"
            onClick={handleStart}
          >
            <p className="animate-pulse">Presiona cualquier botón para iniciar</p>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center min-h-screen 
      bg-gradient-to-r from-gray-50 to-gray-300
      dark:bg-gradient-to-r dark:from-gray-900  dark:to-gray-600 
      px-6 transition-colors duration-700"
    >
      {/* Botón modo oscuro */}
      <motion.button
        onClick={() => { setDarkMode(!darkMode); playItemSelected(); }}
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: showButton ? 1 : 0,
          y: showButton ? 0 : -20,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="
          fixed 
          right-4 
          top-30 md:top-12
          bg-cyan-900 dark:bg-white 
          p-2 rounded-full shadow 
          hover:scale-105 
          transition-transform duration-300
          z-50
          cursor-pointer
        "
        aria-label="Cambiar modo oscuro"
      >
        {darkMode ? <FaRegSun className="text-cyan-900 text-3xl" /> : <FaRegMoon className="text-white text-3xl" />}
      </motion.button>

      {/* Estadísticas estilo FFVII */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: showButton ? 1 : 0,
          y: showButton ? 0 : -10,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="
        time-ff7 
            fixed 
            right-4
            top-48 md:top-28
            text-right
            dark:text-cyan-900 text-white
            bg-cyan-900 dark:bg-white 
            font-medium 
            text-sm md:text-lg
            space-y-1
            z-50
            select-none
            pointer-events-none
          "
      >
        <div>
          Time: <span className="tracking-wider">{formatTime(totalPlayed)}</span>
        </div>
        <div>
          Guiles: <span className="tracking-wider">{formatGil(777)}G</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 w-full">
        {/* === Menú lateral estilo FFVII === */}
        <nav className="hidden md:flex flex-col items-start justify-center pl-10 md:pl-40 gap-4 text-left md:mt-20 md:col-span-1">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              onMouseEnter={() => playItemChange()} onMouseLeave={() => stopItemChange()}
              onClick={() => { playItemSelected(); }}
              className="
                group relative text-lg md:text-3xl font-medium 
                text-cyan-800 dark:text-gray-200 
                hover:text-cyan-600 dark:hover:text-cyan-600
                flex items-center gap-3 py-1
              "
            >
              {/* Ícono animado: aparece en hover con destello */}
              <motion.span
                className="absolute -left-10 text-cyan-600 text-2xl scale-x-0 
                  group-hover:scale-x-100 transition-transform duration-300 shadow-[0_0_1px_#22d3ee]">
                {item.icon}
              </motion.span>

              {/* Texto del ítem */}
              <span className="z-10">{item.label}</span>

              {/* Línea de energía azul animada */}
              <motion.div
                className="ml-2 h-[1px] bg-cyan-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 w-8 shadow-[0_0_10px_#22d3ee]"
              />
            </motion.a>
          ))}
        </nav>

        {/* === Presentación derecha === */}
        <div className="text-center md:pr-10 top-1 col-span-2 md:mt-20 md:col-span-1">
          <RevealOnScroll
            once={false}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold text-cyan-800 dark:text-white"
          >
            Juanes Sepúlveda
          </RevealOnScroll>

          <RevealOnScroll
            once={false}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-3xl font-light text-cyan-800 dark:text-gray-300 mt-3"
          >
            Full Stack Developer
          </RevealOnScroll>
        </div>

        {/* === Navbar superior (mobile) === */}
        <div className=" fixed md:hidden absolute top-4 left-4 right-4 flex justify-between items-center z-50 bg-cyan-800 dark:bg-white h-10 rounded-full px-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white dark:text-cyan-800 text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menú móvil desplegable */}
        <AnimatePresence className="md:hidden ">
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-14 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md py-4 z-40 shadow-lg md:hidden"
            >
              <div className="flex flex-col items-center gap-4 md:hidden">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-800 dark:text-gray-200 text-lg font-medium hover:text-cyan-600"
                  >
                    {item.icon}   {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Indicador de scroll */}
      <RevealOnScroll
        once={true}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 flex flex-col items-center"
      >
        <span className="text-xs text-gray-600 dark:text-gray-400 mb-2">
          Desliza hacia abajo
        </span>
        <div className="w-1 h-3 bg-gray-600 dark:bg-gray-400 rounded-full animate-bounce"></div>
      </RevealOnScroll>
    </section>
  );
}

export default Hero;
