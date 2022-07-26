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
            setCounter(0)
            console.log("ya no esta en tu carrito")
        }
    }

    return ( 
        <div className='d-flex align-items-end'>
            <div className="btn-toolbar" role="toolbar" >
                {
                    counter==0
                   ? <button className='btn btn-outline-info' disabled>-</button>
                   : <button className='btn btn-outline-info' onClick={Subs}>-</button>
                }
                <p className='px-4 mx-1 my-auto fs-4 text-primary border border-info rounded'>{counter}</p>
                <button className='btn btn-outline-info me-4' onClick={Add}>+</button>
            </div>
            {
                counter==0
               ? <button className='btn btn-info text-light mt-2' disabled >Agregar al carrito</button> 
               : <button className='btn btn-info text-light mt-2' onClick={() => onAdd(counter)} >Agregar al carrito</button>
            }
        </div>
     );
}
 
export default ItemCount;