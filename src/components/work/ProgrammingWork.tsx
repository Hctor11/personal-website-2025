import React, { useState } from "react";
import "./work.css"; // Asegúrate de tener este archivo CSS

export const PROGRAMMING_PROJECTS = [
  {
    title: "Project 1",
    description: "Description of the project",
    date: "2012",
    image: "/programming/p1.png",
    technologies: ["React", "TypeScript", "CSS"],
    link: "/programming/reactres",
  },
  {
    title: "Project 2",
    description: "Description of the project",
    date: "2012",
    image: "/programming/p2.png",
    technologies: ["React", "TypeScript", "CSS"],
    link: "../assets/images/programming/p2.png",
  },
  // Puedes agregar más proyectos aquí
];

const ProgrammingWork = () => {
  const [hovered, setHovered] = useState(null); // Estado para manejar qué item está siendo hovered

  const handleMouseEnter = (index: any) => setHovered(index); // Cambia el índice del item que está en hover
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
            <img src={project.image} alt={project.title} />
            <div className={`details ${hovered === index ? "show" : ""}`}>
              <div className="details-title">
                <h3>{project.title}</h3>
                <span>({project.date})</span>
              </div>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgrammingWork;
