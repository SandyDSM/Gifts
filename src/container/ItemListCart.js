import React from "react";
import { CartContext } from "../components/CartContext";
import { useContext } from "react"; 
import { Link } from "react-router-dom";
import "../sass/custom.css";
import ItemCart from "../components/ItemCart";

const ItemListCart = () => {
  const test = useContext(CartContext);
  console.log(test.cartList)
  if(test.cartList.length > 0){
    return (
      <div>
        <h1 className="text-primary text-center mt-5">Regalos en tu carrito</h1>
        <div className="row justify-content-end">
          <Link to='/' className="col-6 btn btn-info text-light col-md-3 my-3 me-4">Ir por más Regalos</Link>
        </div>
        {
          test.cartList.map(product => <ItemCart key={product.id} product={product}/>)
        }
        <Link to='/' className="col-6 btn btn-outline-info col-md-3 m-3"onClick={()=>test.clear()}>Vaciar carrito</Link>
        <div className="d-flex flex-column align-items-end">
          <p className="col-12 display-6 text-center text-md-end">Total: ${test.totalPrice().toFixed(2)}</p>
          <Link to='#' className="col-12 btn btn-info text-light col-md-3 my-3">Finalizar compra</Link>
        </div>
      </div>
    );
    }
    return(
      <div>
        <h1 className="text-primary text-center mt-5">Regalos en tu carrito</h1>
        <div className="row text-center">
          <div className="col-12">
             <p>No hay productos en tu carrito</p>
             <Link to='/' className="btn btn-info text-light">Ir a Lista de Regalos</Link>
           </div>
        </div>
      </div>
    )
};

export default ItemListCart;
