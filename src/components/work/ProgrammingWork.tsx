import React, { useState } from "react";
import "./work.css"; // Asegúrate de crear este archivo CSS

const ProgrammingWork = () => {
  const images = [
    "/pppimage.png",
    "/pppimage.png",
    "/pppimage.png",
    "/pppimage.png",
    "/pppimage.png",
  ];

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div className="programming-work">
      <div
        className={`gallery ${hovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Programming Work ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgrammingWork;
