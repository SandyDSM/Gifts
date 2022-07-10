import React, { useState } from 'react';
import "../sass/custom.css";

const ItemCount = ({initial, stock, onAdd}) => {
    const[counter, setCounter] = useState(initial)

    const Add =() =>{
        if (counter < stock){
            const sum = counter +1;
            setCounter(sum)
        }else{
            console.log("Se agotó el producto")
        }
    }
    const Subs =() =>{
        if (counter > initial){
            const subs = counter -1;
            setCounter(subs)
        }else{
            console.log("ya no esta en tu carrito")
        }
    }

    return ( 
        <div className=''>
            <div className="btn-toolbar" role="toolbar" >
                <button className='btn btn-outline-info' onClick={Subs}>-</button>
                <p className='mx-5 my-auto fs-4 text-primary'>{counter}</p>
                <button className='btn btn-outline-info' onClick={Add}>+</button>
            </div>
            <button className='btn btn-info text-light mt-2' onClick={() => onAdd(counter)} >Agregar al carrito</button>
        </div>
     );
}
 
export default ItemCount;