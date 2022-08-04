import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import "../sass/custom.css";
import products from "../data/products.json"
import ItemDetail from "../components/ItemDetail"
import {db } from "../utils/firebaseConfig"
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {

    const [data, setdata] = useState({});
    const { id } = useParams();

    useEffect(()=>{
       /* const getProducts = new Promise(resolve => {
            setTimeout(() => {
                resolve(products)
            }, 1000)
        })
        .then(res => setdata(res.find(product => product.id === parseInt(id))));*/
        const docRef = doc(db, "products", id);
        getDoc(docRef)
            .then(res =>setdata({id:res.id, ...res.data()}))
    }, [id])

    return(
        <div>
            <ItemDetail product={data}/>
        </div>
    );
}

export default ItemDetailContainer;