import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "./ProductModule.css";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="product-grid">
      {products.map((singleProduct) => (
        <ProductCard renderAdd={true} product={singleProduct} key={singleProduct.id} />
      ))}
    </section>
  );
}

export default Product;
