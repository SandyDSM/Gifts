import React from "react";
import { CartContext } from "../components/CartContext";
import { useContext } from "react"; 
import "../sass/custom.css";
import ItemCart from "../components/ItemCart";

const ItemListCart = () => {
  const test = useContext(CartContext);
  console.log(test.cartList)
  return (
    <div>
      <h1 className="text-primary text-center my-5">Regalos en tu carrito</h1>
      {test.cartList.length > 0 
        ?(test.cartList.map((product) => (
          <ItemCart key={product.id} product={product}/>
        )))
        :(<p>No hay productos en tu carrito</p>)
        }
    </div>
  );
};

export default ItemListCart;
