import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/Action.type";
import "./ProductDetail.css";
import api from "../../Utility/api";
import BackButton from "../../Components/BackButton";

function ProductDetail() {
  const { productId } = useParams();
  const { dispatch } = useContext(DataContext);

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api
      .get(`/products/${productId}`)
      .then((res) => setProduct(res.data))
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [productId]);

  const addToCart = () => {
    if (!product) return;
    dispatch({ type: Type.ADD_TO_BASKET, item: product });
  };

  if (isLoading) return <Loader />;
  if (!product) return <p>Product not found!</p>;

  return (
    <div className="detail-container">
      <BackButton label="Back" />

      <div className="detail-image-box">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="detail-info">
        <h1 className="detail-title">{product.title}</h1>
        <p className="detail-price">${product.price}</p>

        {product.rating && (
          <div className="detail-rating">
            <span className="stars">
              {"★".repeat(Math.round(product.rating.rate))}
              {"☆".repeat(5 - Math.round(product.rating.rate))}
            </span>
            <span className="rating-count">
              ({product.rating.count} ratings)
            </span>
          </div>
        )}

        <p className="detail-desc">{product.description}</p>

        <button className="detail-btn" onClick={addToCart} type="button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
