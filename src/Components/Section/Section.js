import React from "react";

const Section = props => {
  return (
    <div className="section">
      {props.blagName.map(name => {
        return (
          <a href="/" key={name.id}>
            {" "}
            {name.title + ", "}
          </a>
        );
      })}
    </div>
  );
};

export default Section;
