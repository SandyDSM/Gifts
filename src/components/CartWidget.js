import React from "react";
import "../sass/custom.css";
import { GiftFill } from "react-bootstrap-icons";
import { CartContext } from "../components/CartContext";
import { useContext } from "react"; 

const CartWidget = () => {
  const test = useContext(CartContext);
  return (
    <div className="mx-1 position-relative">
      <GiftFill color="#C9B313" size={20} ></GiftFill>
      {
        test.totalProducts() > 0
      ?(<span className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">{test.totalProducts()}<span className="visually-hidden">cart</span></span>)
      :<></>
      }
    </div>
  );
};

export default CartWidget;
