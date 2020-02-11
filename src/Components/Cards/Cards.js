import React from "react";

const Cards = props => {
  const cards = props.cards.map(data => {
    return (
      <a className="card" href="/" key={data.id}>
        <img src={data.imgSrc} alt={data.name} />
        <p>{data.title}</p>
      </a>
    );
  });
  return (
    <div className="card-container">
      
      <div className="card-wrapper">{cards}</div>
    </div>
  );
};

export default Cards;
