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
import intellijIcon from "../assets/skills/intellij.svg";
import jiraIcon from "../assets/skills/jira-software.svg";
import mariadbIcon from "../assets/skills/mariadb.svg";
import nodejsIcon from "../assets/skills/node-js.svg";
import tailwindcssIcon from "../assets/skills/tailwind-css.svg";
import vscodeIcon from "../assets/skills/vscode.svg";


const skills = [
  { name: "Angular", icon: angularIcon },
  { name: "CSS", icon: cssIcon },
  { name: "HTML", icon: htmlIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "Java", icon: javaIcon },
  { name: "React", icon: reactIcon },
  { name: "Spring", icon: springBootIcon },
  { name: "Docker", icon: dockerIcon },
  { name: "Git", icon: gitIcon },
  { name: "GitHub", icon: githubIcon },
  { name: "IntelliJ", icon: intellijIcon },
  { name: "Jira", icon: jiraIcon },
  { name: "MariaDB", icon: mariadbIcon },
  { name: "Node.js", icon: nodejsIcon },
  { name: "Tailwind", icon: tailwindcssIcon },
  { name: "VS Code", icon: vscodeIcon },
];

const backendSkills = skills.filter((skill) =>
  ["Java", "Spring", "Node.js"].includes(skill.name)
);

const frontendSkills = skills.filter((skill) =>
  ["Angular", "CSS", "HTML", "JavaScript", "React"].includes(
    skill.name
  )
);

const toolsSkills = skills.filter(
  (skill) =>
    !["Java", "Spring", "Angular", "CSS", "HTML", "JavaScript", "React", "Node.js"].includes(
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
