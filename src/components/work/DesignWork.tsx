import React, { useState } from "react";
import "./work.css";

export const PROGRAMMING_PROJECTS = [
  {
    title: "Nothing Phone 2a",
    description: "Description of the project",
    date: "2024",
    image: "/design/d1.png",
    technologies: ["React", "TypeScript", "CSS"],
    link: "/design/nothing",
  },
  {
    title: "Trigonometrica",
    description: "Description of the project",
    date: "2024",
    image: "/design/d2.png",
    technologies: ["React", "TypeScript", "CSS"],
    link: "/design/trigonometrica",
  },
  {
    title: "Commonplace",
    description: "Description of the project",
    date: "2024",
    image: "/design/d4.png",
    technologies: ["React", "TypeScript", "CSS"],
    link: "/design/commonplace",
  },
  {
    title: "Alexandria",
    description: "Description of the project",
    date: "2024",
    image: "/design/d3.png",
    technologies: ["React", "TypeScript", "CSS"],
    link: "/design/alexandria",
  },
  {
    title: "Advertisements",
    description: "Description of the project",
    date: "2024",
    image: "/design/d5.png",
    technologies: ["React", "TypeScript", "CSS"],
    link: "/design/socialmedia",
  },
  {
    title: "Dribbble Works",
    description: "Description of the project",
    date: "202X",
    image: "/design/d6.png",
    technologies: ["React", "TypeScript", "CSS"],
    link: "/design/dribbble",
  },
];

const DesignWork = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => setHovered(index);
  const handleMouseLeave = () => setHovered(null);

  return (
    <div className="programming-work">
      <div className="gallery">
        {PROGRAMMING_PROJECTS.map((project, index) => (
          <div
            className="gallery-item"
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
            </a>
            <div className={`details ${hovered === index ? "show" : ""}`}>
              <div className="details-title">
                <h3>{project.title}</h3>
                <span>({project.date})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignWork;
