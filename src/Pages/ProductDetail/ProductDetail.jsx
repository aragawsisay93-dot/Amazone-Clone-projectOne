import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import "./ProductDetail.css";

function ProductDetail() {
  const { productId } = useParams();
  const { dispatch } = useContext(DataContext);

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        rating: product.rating?.rate,
      },
    });
  };

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [productId]);

  if (isLoading) return <Loader />;
  if (!product) return <p>Product not found!</p>;

  return (
    <div className="detail-container">
      {/* LEFT: IMAGE */}
      <div className="detail-image-box">
        <img src={product.image} alt={product.title} />
      </div>

      {/* RIGHT: INFO */}
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

        <button className="detail-btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
