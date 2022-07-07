import React from "react";
import "../sass/custom.css";
import { GiftFill } from "react-bootstrap-icons";

const CartWidget = () => {
  return (
    <div className="mx-1 position-relative">
      <GiftFill color="#C9B313" size={20} ></GiftFill>
      <span class="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">5<span class="visually-hidden">cart</span>
      </span>
    </div>
  );
};

export default CartWidget;
