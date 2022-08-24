import React from 'react'
import { Link } from 'react-router-dom';
import "../sass/custom.css";

const Item = ({product}) => {
  return (
    <div className='card'>
      <Link to={`/detail/${product.id}`}>
        <img src={product.img} className="card-img-top" alt={product.name}></img></Link>
        <div className='card-body'>
            <h5 className='card-title'>{product.name}</h5>
            <p className="card-text">${product.price}</p>
        </div>
    </div>
  )
}

export default Item;