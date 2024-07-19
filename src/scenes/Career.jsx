import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import companyLogo from "../assets/swisscom.png";

const experiences = [
  {
    company: "Swisscom",
    role: "Lehrling",
    duration: "2022-2026",
    positions: [
      {
        title: "Fullstack im Team OppenSource",
        period: "Februar 2024 – Heute",
        location: "Zürich, Schweiz",
        description:
          "Fullstack-Entwickler im Triage-IT Team Einsatz von Angular und Typescript im Frontend Einsatz von Java und Spring Boot im Backend Arbeit als Scrum Master",
        skills: ["Angular.js", "Typescript", "SDX", "Java", "Spring Boot"],
      },
      {
        title: "Backend im Team Xtendables",
        period: "August 2023 – Febuar 2024",
        location: "Zürich, Schweiz",
        description:
          "Einsatz von Solvatio in Backend-Prozessen im Smart Support. Erstellung von einfachen Stories arbeiten. Verwendung von Java und KBUnit-Tests",
        skills: ["Java", "KBUnit-Tests", "Solvatio", "Xtend"],
      },
    ],
  }
];

const Career = () => {
  return (
    <section id="career" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
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
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-purple">CAREER</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      {/* CAREER */}
      <div className="mx-auto max-w-4xl px-4">
        {experiences.map((experience, index) => (
          <div key={index} className="mb-12">
            <div className="flex items-center mb-4">
              <img src={companyLogo} alt={experience.company} className="w-10 h-10 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">{experience.company}</h3>
                <p className="text-gray-400">{experience.role} · {experience.duration}</p>
              </div>
            </div>
            {experience.positions.map((position, index) => (
              <div key={index} className="mb-6 ml-14">
                <h4 className="text-lg font-semibold">{position.title}</h4>
                <p className="text-gray-400">{position.period}</p>
                <p className="text-gray-400 mb-2">{position.location}</p>
                <p className="mb-2">{position.description}</p>
                <div className="flex items-center space-x-2">
                  {position.skills.map((skill, index) => (
                    <span key={index} className="bg-gray-800 text-white rounded-full px-2 py-1 text-xs">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
        <button className="text-blue-500 mt-6">Alle Anzahl Berufserfahrungen anzeigen &rarr;</button>
      </div>
    </section>
  );
};

export default Career;
