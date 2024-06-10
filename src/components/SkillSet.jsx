import React from "react";
import angularIcon from "../assets/skills/angular.svg";
import cssIcon from "../assets/skills/css.svg";
import htmlIcon from "../assets/skills/html.svg";
import javascriptIcon from "../assets/skills/javascript.svg";
import javaIcon from "../assets/skills/java.svg";
import reactIcon from "../assets/skills/react.svg";
import springBootIcon from "../assets/skills/spring-boot.svg";
import dockerIcon from "../assets/skills/docker.svg";
import gitIcon from "../assets/skills/git.svg";
import githubIcon from "../assets/skills/github.svg";
import mariadbIcon from "../assets/skills/mariadb.svg";
import nodejsIcon from "../assets/skills/node-js.svg";
import tailwindcssIcon from "../assets/skills/tailwind-css.svg";
import mysqlIcon from "../assets/skills/mysql.svg";
import figmaIcon from "../assets/skills/figma.svg";
import gitlabIcon from "../assets/skills/gitlab.svg";
import bootstrapIcon from "../assets/skills/bootstrap.svg";


const skills = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "Angular", icon: angularIcon },
  { name: "React", icon: reactIcon },
  { name: "Java", icon: javaIcon },
  { name: "Spring", icon: springBootIcon },
  { name: "Node.js", icon: nodejsIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "MariaDB", icon: mariadbIcon },
  { name: "Git", icon: gitIcon },
  { name: "GitHub", icon: githubIcon },
  { name: "GitLab", icon: gitlabIcon },
  { name: "Docker", icon: dockerIcon },
  { name: "Tailwind", icon: tailwindcssIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "Figma", icon: figmaIcon },
];

const backendSkills = skills.filter((skill) =>
  ["Java", "Spring", "Node.js", "MySQL","MariaDB"].includes(skill.name)
);

const frontendSkills = skills.filter((skill) =>
  ["HTML", "CSS",  "JavaScript","Angular", "React"].includes(
    skill.name
  )
);

const toolsSkills = skills.filter(
  (skill) =>
    !["Java", "Spring", "Angular", "CSS", "HTML", "JavaScript", "React", "Node.js", "MySQL", "MariaDB"].includes(
      skill.name
    )
);

const SkillSet = () => {
  return (
    <div className="flex justify-center space-x-10 py-10">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Backend</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {backendSkills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center hover:bg-deep-blue-ligher rounded-lg p-4">
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-2" />
              <p className="text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Frontend</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {frontendSkills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center hover:bg-deep-blue-ligher rounded-lg p-4">
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-2" />
              <p className="text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Tools</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {toolsSkills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center hover:bg-deep-blue-ligher rounded-lg p-4">
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-2" />
              <p className="text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
