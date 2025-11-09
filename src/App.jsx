import Hero from "@/components/Hero";
import About from "@/components/About";
import FF7Menu from "@/components/ffvii/MainMenu";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

function App() {
  return (
    <div class="font-sans">
      <Hero />
      <hr className="border-t border-gray-900 dark:border-gray-700 mx-auto w-4/5 opacity-50" />

<FF7Menu />

      <Projects />
      <hr className="border-t border-gray-900 dark:border-gray-700 mx-auto w-4/5 opacity-50" />
      {/* <TechStack />
      <hr className="border-t border-gray-900 dark:border-gray-700 mx-auto w-4/5 opacity-50" /> */}
      <About />
      <hr className="border-t border-gray-900 dark:border-gray-700 mx-auto w-4/5 opacity-50" />
      <Footer />
    </div>
  );
}

export default App;