import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Carousel from "../components/Carousel";

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48 flex flex-col items-center">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-5xl">
            <span className="text-purple">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <motion.div
        className="w-full flex justify-center mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Carousel />
      </motion.div>
    </section>
  );
};

export default Projects;
