import React, { useState } from 'react';
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
        skills: ["Angular.js", "Typescript", "SDX", "Java", "Spring Boot", "Scrum"],
      },
      {
        title: "Backend im Team Xtendables",
        period: "August 2023 – Februar 2024",
        location: "Zürich, Schweiz",
        description:
          "Einsatz von Solvatio in Backend-Prozessen im Smart Support. Erstellung von einfachen Stories arbeiten. Verwendung von Java und KBUnit-Tests",
        skills: ["Java", "KBUnit-Tests", "Solvatio", "Xtend"],
      },
      {
        title: "Mitarbeit im Banking Umfeld beim Testing",
        period: "Februar 2023 – August 2023",
        location: "Zürich, Schweiz",
        description:
          "Management von 1200 Regressionstestfällen in JIRA Testfallautomatisierung mit UIPath",
        skills: ["UiPath", "Jira"],
      },
      {
        title: "Data Analyst B2B",
        period: "August 2022 – Februar 2023",
        location: "Zürich, Schweiz",
        description:
          "Remediation-Script erstellen mit PowerShell Aternity Recording business process monitoring Capacity management",
        skills: ["PowerShell", "Bash", "Tableau", "Office 365"],
      },
    ],
  }
];

const Career = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 2;
  const totalPages = Math.ceil(experiences[0].positions.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const positionsToShow = experiences[0].positions.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const swisscomExperience = experiences[0];

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
      <div className="mx-auto max-w-4xl px-4 pb-10">
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <img src={companyLogo} alt={swisscomExperience.company} className="w-10 h-10 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">{swisscomExperience.company}</h3>
              <p className="text-gray-400">{swisscomExperience.role} · {swisscomExperience.duration}</p>
            </div>
          </div>
          {positionsToShow.map((position, index) => (
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
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="text-blue-500 disabled:text-gray-400"
          >
            &larr; Zurück
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="text-blue-500 disabled:text-gray-400"
          >
            Weiter &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Career;
