import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import "../sass/custom.css";
import products from "../data/products.json"
import ItemDetail from "../components/ItemDetail"

const ItemDetailContainer = () => {

    const [data, setdata] = useState({});
    const { id } = useParams();

    useEffect(()=>{
        const getProducts = new Promise(resolve => {
            setTimeout(() => {
                resolve(products)
            }, 1000)
        })
        .then(res => setdata(res.find(product => product.id === parseInt(id))));
    }, [])

    return(
        <div>
            <ItemDetail product={data}/>
        </div>
    );
}

export default ItemDetailContainer;