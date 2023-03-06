import React from "react";
import Card from "./Card/Card";

const Team = () => {
  const names = ["Святослав Кратик", "Владислав Милевский", "Матвей Шиманович", "Роман Котляров"];

  return (
    <div>
      Team
      {names.map((name) => (
        <Card name={name} />
      ))}
    </div>
  );
};

export default Team;
