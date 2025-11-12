import { FaGithub, FaLinkedin } from "react-icons/fa";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import { useTranslation, Trans } from "react-i18next";
import "@/hooks/i18n";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center text-center min-h-screen 
        bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 
        px-6 transition-colors duration-700"
    >
      <RevealOnScroll
        once={false}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6 text-cyan-900 dark:text-white">
          {t("about.title")}
        </h2>

        <p className="text-gray-700 dark:text-gray-300 text-lg space-y-3">
          {t("about.intro")} <br />
          <Trans
            i18nKey="about.name"
            components={{
              1: <span className="font-bold text-cyan-700" />,
              3: <span className="text-cyan-700 font-bold" />
            }}
          />
          <br />
          {t("about.outro")}
        </p>

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
