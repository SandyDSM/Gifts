import React, {useEffect, useState} from "react";
import "../sass/custom.css";
import products from "../data/products.json"
import ItemDetail from "../components/ItemDetail"

const ItemDetailContainer = () => {

    const [data, setdata] = useState({});

    useEffect(()=>{
        const getProducts = new Promise(resolve => {
            setTimeout(() => {
                resolve(products[2])
            }, 2000)
        });
        getProducts.then(res => setdata(res))
    }, [])

    return(
        <div>
            <ItemDetail product={data}/>
        </div>
    );
}

export default ItemDetailContainer;