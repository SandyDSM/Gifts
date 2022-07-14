import React from "react";
import "../sass/custom.css";
import Item from "../components/Item";

const ItemList = ({ data = [] }) => {
  return data.map((products) => (
    <div className="col-12 col-md-6 col-lg-3 my-2">
      <Item key={products.id} product={products} />
    </div>
  ));
};

export default ItemList;
