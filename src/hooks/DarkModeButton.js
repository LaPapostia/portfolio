import { useState, useEffect } from "react";

function DarkModeButton({ darkMode, setDarkMode }) {
  const [showButton, setShowButton] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        // Scroll hacia arriba
        setShowButton(true);
      } else {
        // Scroll hacia abajo
        setShowButton(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`
        fixed right-4 
        top-6 sm:top-8 md:top-10 lg:top-16
        bg-gray-200 dark:bg-gray-700 
        p-2 rounded-full shadow 
        hover:scale-105 transition-all duration-300 z-50
        ${showButton ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      aria-label="Cambiar modo oscuro"
      style={{ cursor: "pointer" }}
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default DarkModeButton;
