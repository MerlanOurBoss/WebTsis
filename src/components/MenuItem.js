import React from "react";

function MenuItem({ image, name, price}) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
      <button className="addToCart"> Add To Order </button>
    </div>
  );
}

export default MenuItem;