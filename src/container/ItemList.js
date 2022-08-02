import React from "react";
import "../sass/custom.css";
import Item from "../components/Item";

const ItemList = ({ data = [] }) => {
  if (data.length === 0) {
    return (
      <div className="row justify-content-center align-items-center">
        <div
          className="col-12 spinner-border text-primary"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return data.map((products) => (
    <div className="col-12 col-md-6 col-lg-3 my-2">
      <Item key={products.id} product={products} />
    </div>
  ));
};

export default ItemList;
