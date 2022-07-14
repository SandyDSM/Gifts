import React from 'react'
import "../sass/custom.css";

const Item = ({product}) => {
  return (
    <div className='card'>
        <img src={product.img} class="card-img-top" alt={product.name}></img>
        <div className='card-body'>
            <h5 className='card-title'>{product.name}</h5>
            <p className="card-text">{product.price}</p>
        </div>
    </div>
  )
}

export default Item;