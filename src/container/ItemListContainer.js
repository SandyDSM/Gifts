import React, {useEffect, useState} from "react";
import "../sass/custom.css";
import ItemList from "./ItemList";
//import products from "../data/products.json"
import { useParams } from "react-router";
import {db} from "../utils/firebaseConfig" 
import { collection, getDocs, query, where } from "firebase/firestore";



const ItemListContainer = () => {

    const [data,setdata] = useState([]);
    const{ id } = useParams();  

    useEffect(()=>{
       /* -------  LLAMANDO DESDE EL JSON INTERNO
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
        }     */
        
        const querySnapshot = collection(db, "products");
        if(id){
            const queryFilter = query(querySnapshot, where('categoryId', '==',  parseInt(id) ))
            getDocs(queryFilter)
            .then(res =>setdata(res.docs.map(product =>({id: product.id, ...product.data()}))))
        }else{
            getDocs(querySnapshot)
            .then(res =>setdata(res.docs.map(product =>({id: product.id, ...product.data()}))))
        }
    }, [id])

   
    return(
        <div className="row">
            <ItemList data={data}/>
           
        </div>
    );
}

export default ItemListContainer;