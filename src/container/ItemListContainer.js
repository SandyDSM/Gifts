import React from "react";
import "../sass/custom.css";
import ItemCount from "../components/ItemCount";

const ItemListContainer = () => {
    const onAdd = (param) =>{
        console.log(`Cantidad comprada: ${param}`);
    }
    return(
        <div>
            <ItemCount initial={0} stock={5} onAdd={onAdd}/>
        </div>
    );
}

export default ItemListContainer;