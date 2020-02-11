import React from "react";

const Navigation = () => {
  const navName = ["Trips", "Contact", "About"];
  return (
    <ul className="nav">
      {navName.map(name => (
        <li key={name}>
          <a href="/">{name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
