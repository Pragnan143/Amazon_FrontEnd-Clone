import React from "react";
import Book from "./Book";
import Product2 from "./Product2";
import Product3 from "./Product3";
import Product4 from "./Product4";
import Product5 from "./Product5";
import Product6 from "./Product6";

function Product() {
  return (
    <div class="product">
      <div class="product_row d-flex">
        <Book />
        <Product2 />
        <Product3 />
      </div>
      <div class="product_row d-flex">
        <Product4 />
        <Product5 />
      </div>{" "}
      <div class="product_row d-flex">
        <Product6 />
      </div>
    </div>
  );
}

export default Product;
