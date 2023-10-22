import { Link } from "react-router-dom";
import React, { useContext } from "react";

import { ShopContext } from "../helpers/ShopContex";

export const  MenuItem = (props) => {
  
  const { id, name, price, image } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    
    <div className="menuItem">
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
      {cartItemCount > 0 && <> </>}
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p> 

      {cartItemCount > 0 ? (
        <p> In the cart: {cartItemCount} </p>
      ) : (
        <p>    </p>
      )}           
      </button>
    </div>
    
  );
};
