import React, {useContext} from "react";
import {ShopContext} from "../helpers/ShopContex";
import {CartItem} from "../components/CartItem";
import { MenuList } from "../helpers/MenuList";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css"

export const Cart = () => {

  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount().toFixed(2);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Shopping Cart</h1>
      </div>
      <div className="cart">
        {MenuList.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/menu")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1>Cart is Empty</h1>
      )}
    </div>
  );
};
