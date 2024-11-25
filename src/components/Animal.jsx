import React from "react";

const Animal = ({ randomAnimal }) => {
  return (
    <div className="animal border-orange">
      <h3>Animal Name</h3>
      <p className="animal-name">{randomAnimal}</p>
    </div>
  );
};

export default Animal;
