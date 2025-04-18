import '../components/styles/Header.css'
import React, { useState } from "react";
import ProgrammingWork from './work/ProgrammingWork';
import DesignWork from './work/DesignWork';
import ProfessionalWork from './work/ProfessionalWork';

const WorkMenu = () => {
  const [selectedOption, setSelectedOption] = useState("Design Work");

  const handleOptionClick = (option:any) => {
    setSelectedOption(option); // Cambia la opción seleccionada al hacer clic
  };

  const renderContent = () => {
    switch (selectedOption) {
      case "Programming Work":
        return <ProgrammingWork />;
      case "Design Work":
        return <DesignWork />;
      case "Professional Work":
        return <ProfessionalWork />;
      default:
        return null;
    }
  };

  return (
    <div className="work-menu">
      <div className="menu-options">
        {[ "Design Work","Programming Work", "Professional Work"].map((option) => (
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
