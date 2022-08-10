import React from "react";
import { CartContext } from "../components/CartContext";
import { useContext } from "react"; 
import { Link } from "react-router-dom";
import "../sass/custom.css";
import ItemCart from "../components/ItemCart";
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import {db} from "../utils/firebaseConfig"
import { async } from "@firebase/util";

const ItemListCart = () => {
  const test = useContext(CartContext);
  console.log(test.cartList)
  const createOrder = () =>{
    let itemsForDB = test.cartList.map(item=>({
      id:item.id,
      title: item.name,
      price: item.price,
      qty: item.quantity
    }))
    let order = {
      buyer:{
        email: "sandy@gmail.com",
        name: "Sandy de los Santos",
        phone: "5512345678"
      },
      date: serverTimestamp(),
      items: itemsForDB,
      total:test.totalPrice()
    }
    console.log(order)

    const createOrderInDb = async () =>{
      const newOrderRef = doc(collection(db, "orders"))
      await setDoc(newOrderRef, order)
      return newOrderRef
    }

    createOrderInDb()
      .then(result => alert('tu orden ha sido creada. ID de orden:' +result.id))
      .catch(err => console.log(err))

    test.cartList.forEach(async(item) =>{
      const itemRef = doc(db, "products", item.id)
      await updateDoc(itemRef,{
        stock: increment(-item.quantity)
      })
    })
    
    test.clear();
  }

  if(test.cartList.length > 0){
    return (
      <div>
        <h1 className="text-primary text-center mt-5">Regalos en tu carrito</h1>
        <div className="row justify-content-between">
          <Link to='/' className="col-4 btn btn-outline-info col-md-3 m-3"onClick={()=>test.clear()}>Vaciar carrito</Link>
          <Link to='/' className="col-4 btn btn-info text-light col-md-3 my-3 me-4">Más Regalos</Link>
        </div>
        {
          test.cartList.map(product => <ItemCart key={product.id} product={product}/>)
        }
        
        <div className="d-flex flex-column align-items-end">
          <p className="col-12 display-6 text-center text-md-end">Total: ${test.totalPrice().toFixed(2)}</p>
          <button onClick={createOrder} className="col-12 btn btn-info text-light col-md-3 my-3">Finalizar compra</button>
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
