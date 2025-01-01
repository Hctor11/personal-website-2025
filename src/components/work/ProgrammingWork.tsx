import React, { useState } from "react";
import "./work.css"; // Asegúrate de tener este archivo CSS

export const PROGRAMMING_PROJECTS = [
  {
    title: "React Resources",
    description: "Description of the project",
    date: "2023",
    image: "/programming/p1.png",
    technologies: ["React", "TypeScript", "CSS"],
    link: "/programming/reactres",
  },
  {
    title: "Pascaline",
    description: "Description of the project",
    date: "2024",
    image: "/programming/p2.png",
    technologies: ["React", "TypeScript", "CSS"],
    link: "/programming/pascaline",
  },
  {
    title: "QR generator",
    description: "Description of the project",
    date: "2024",
    image: "/programming/p4.png",
    technologies: ["React", "TypeScript", "CSS"],
    link: "/programming/qr",
  },
  {
    title: "Image to ASCII",
    description: "Description of the project",
    date: "2024",
    image: "/programming/p3.png",
    technologies: ["React", "TypeScript", "CSS"],
    link: "/programming/ascii",
  },
];

const ProgrammingWork = () => {
  const [hovered, setHovered] = useState<number | null>(null); // Tipo de estado ajustado a number | null

  const handleMouseEnter = (index: number) => setHovered(index); // Cambia el índice del item que está en hover
  const handleMouseLeave = () => setHovered(null); // Resetea el hover cuando el mouse sale

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

export default ProgrammingWork;
