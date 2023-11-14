// generic card item for galleries
import React from "react";

const Card = ({ img, title, btntxt, ...rest }) => {
  // destructure props object
  return (
    <div className="card">
      <div className="card-body">
        <img className="card-img" src={img} />
        <h2 className="card-title">{title}</h2>
      </div>
      <button className="card-btn" {...rest}>
        {btntxt}
      </button>
    </div>
  );
};

export default Card;
