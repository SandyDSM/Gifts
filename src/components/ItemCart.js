import React from "react";
import { CartContext } from "../components/CartContext";
import { useContext } from "react"; 
import "../sass/custom.css";
import { XCircleFill } from "react-bootstrap-icons";

const ItemCart = ({product}) => {
    const test = useContext(CartContext);
  return (
    <>
            <div className="d-md-flex align-items-center mx-3 text-center" >
              <div className="col-12 col-md-3">
                <img src={product.img} class="img-fluid" alt={product.name}></img>
              </div>
                <div className="col-12 col-md-3 mt-3 mt-md-0">
                  <p className="lead">{product.name}</p>
                </div>
                <div className="col-12 col-md-2">
                  {
                    product.quantity > 1
                    ?<p>{product.quantity} productos</p>
                    : <p>{product.quantity} producto</p>
                  }
                </div>
                <div className="col-12 col-md-2 text-md-end">
                  <p>Precio:${product.price}</p>
                  <p className="lead">Subtotal:${(product.price * product.quantity)}</p>
                </div>
                <div className="col-12 col-md-2">
                  <XCircleFill type="button" onClick={()=>test.removeItem(product.id)} color="#C9B313" size={32} />
                </div>
            </div>
            <hr />
          </>
  )
}

export default ItemCart