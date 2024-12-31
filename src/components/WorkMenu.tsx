import '../components/styles/Header.css'
import React, { useState } from "react";
import ProgrammingWork from './work/ProgrammingWork';

const WorkMenu = () => {
  const [selectedOption, setSelectedOption] = useState("Programming Work");

  const handleOptionClick = (option:any) => {
    setSelectedOption(option); // Cambia la opción seleccionada al hacer clic
  };

  // Contenido personalizado para cada opción
  const renderContent = () => {
    switch (selectedOption) {
      case "Programming Work":
        return <ProgrammingWork />;
      case "Design Work":
        return <p>This section covers design work, UI/UX, and more...</p>;
      case "Professional Work":
        return <p>Details about professional work experiences and collaborations.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="work-menu">
      <div className="menu-options">
        {["Programming Work", "Design Work", "Professional Work"].map((option) => (
          <button
            key={option}
            className={`menu-option ${selectedOption === option ? "selected" : ""}`}
            onClick={() => handleOptionClick(option)} // Actualiza la opción seleccionada
          >
            {option}
          </button>
        ))}
      </div>

      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default WorkMenu;
