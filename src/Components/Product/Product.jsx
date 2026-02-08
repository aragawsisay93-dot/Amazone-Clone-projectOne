
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductModule.css";
import api from "../../Utility/api";


function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch(console.log);
  }, []);

  return (
    <section className="product-grid">
      {products.map((p) => (
        <ProductCard renderAdd={true} product={p} key={p.id} />
      ))}
    </section>
  );
}

export default Product;
