import React, {useEffect, useState} from "react";
import "../sass/custom.css";
import ItemCount from "../components/ItemCount";
import ItemList from "./ItemList";
import products from "../data/products.json"

const ItemListContainer = () => {

    const [data,setdata] = useState([]);

    useEffect(()=>{
        const getProducts = new Promise(resolve => {
            setTimeout(() => {
                resolve(products)
            }, 3000)
        });
        getProducts.then(res => setdata(res))
    }, [])

    const onAdd = (param) =>{
        console.log(`Cantidad comprada: ${param}`);
    }
    return(
        <div className="row">
            <ItemList data={data}/>
            <ItemCount initial={0} stock={5} onAdd={onAdd}/>
        </div>
    );
}

export default ItemListContainer;