import React, {useEffect, useState} from "react";
import "../sass/custom.css";
import ItemCount from "../components/ItemCount";
import ItemList from "./ItemList";
import products from "../data/products.json"
import { useParams } from "react-router";

const ItemListContainer = () => {

    const [data,setdata] = useState([]);
    const{ id } = useParams();  

    useEffect(()=>{
        if( id === undefined){
            const getProducts = new Promise(resolve => {
                setTimeout(() => {
                    resolve(products)
                }, 1000)
            });
            getProducts.then(res => setdata(res))
        }else{
            const getProducts = new Promise(resolve => {
                setTimeout(() => {
                    resolve(products.filter(item => item.categoryId === parseInt(id)))
                }, 1000)
            });
            getProducts.then(res => setdata(res))
        }     
    }, [id])

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