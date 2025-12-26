import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import ProductCard from "../../Components/Product/ProductCard";
import "./ResultModule.css";

function Results() {
  const { categoryCardName } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const encodedCategory = encodeURIComponent(categoryCardName);

    fetch(`https://fakestoreapi.com/products/category/${encodedCategory}`)
      .then((res) => res.json())
      .then((data) => setItems(data || []))
      .catch((err) => console.error("Fetch Error:", err))
      .finally(() => setLoading(false));
  }, [categoryCardName]);

  if (loading) return <Loader />;

  return (
    <div className="results-container">
      <h1 className="results-title">
        Results for: <span>{categoryCardName}</span>
      </h1>

      <div className="results-grid">
        {items.length > 0 ? (
          items.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              renderDesc={false}
              renderAdd={true}
            />
          ))
        ) : (
          <p className="no-results">No items found in this category</p>
        )}
      </div>
    </div>
  );
}

export default Results;
