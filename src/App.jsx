import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FF7Menu from "@/components/FFMenu";
import MakoParticles from "@/components/common/MakoParticles";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

function App() {

  const [menuVisible, setMenuVisible] = useState(false);

  const changeVisibleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <div class="font-sans">

      <MakoParticles />

      <Hero />
      <hr className="border-t border-cyan-800 dark:border-cyan-600  mx-auto w-4/5 opacity-50" />

      <About />
      <hr className="border-t border-cyan-800 dark:border-cyan-600 mx-auto w-4/5 opacity-50" />

      <Projects />
      <hr className="border-t border-cyan-800 dark:border-cyan-600 mx-auto w-4/5 opacity-50" />

      {/* <TechStack />
      <hr className="border-t border-cyan-800 dark:border-cyan-600 mx-auto w-4/5 opacity-50" /> */}
      <Footer onClick={() => changeVisibleMenu()} />
      <hr className="border-t border-cyan-800 dark:border-cyan-600 mx-auto w-4/5 opacity-50" />

      {/* Menú FFVII */}
      <FF7Menu visible={menuVisible} onClose={() => console.log("hi")} />
    </div>
  );
}

export default App;