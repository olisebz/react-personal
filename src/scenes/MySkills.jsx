import SkillSet from "../components/SkillSet";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const MySkills = () => {
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-purple">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>
      </div>

      {/* SKILLS */}
      <motion.div
        className="flex mt-5 justify-center md:justify-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <SkillSet />
      </motion.div>
    </section>
  );
};

export default MySkills;
