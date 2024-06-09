import React from "react";
import angularIcon from "../assets/skills/angular.svg";
import bootstrapIcon from "../assets/skills/bootstrap.svg";
import cssIcon from "../assets/skills/css.svg";
import htmlIcon from "../assets/skills/html.svg";
import javascriptIcon from "../assets/skills/javascript.svg";
import javaIcon from "../assets/skills/java.svg";
import reactIcon from "../assets/skills/react.svg";
import springBootIcon from "../assets/skills/spring-boot.svg";



// Importiere hier weitere Icons

const skills = [
  { name: "Angular", icon: angularIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "CSS", icon: cssIcon }, // Hinzugefügt
  { name: "HTML", icon: htmlIcon }, // Hinzugefügt
  { name: "JavaScript", icon: javascriptIcon }, // Hinzugefügt
  { name: "Java", icon: javaIcon }, // Hinzugefügt
  { name: "React", icon: reactIcon }, // Vorhanden
  { name: "Spring Boot", icon: springBootIcon }, // Hinzugefügt
];

const SkillSet = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center">
          <img src={skill.icon} alt={skill.name} className="w-20 h-20" />
          <p className="mt-2 text-center">{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillSet;
