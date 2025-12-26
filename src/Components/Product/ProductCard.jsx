import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormal/CurrencyFormat";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/Action.type";
import "./ProductModule.css";

function ProductCard({
  product,
  flex = false,
  renderDesc = false,
  renderAdd = true,
}) {
  if (!product) return null;

  const { id, title, image, price, rating, description } = product;
  const { dispatch } = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: product,
    });
  };

  return (
    <div className={`product-card ${flex ? "product-flex" : ""}`}>
      {/* IMAGE */}
      <Link to={`/products/${id}`} className="product-link">
        <img src={image} alt={title} className="product-img" />
      </Link>

      {/* INFO */}
      <div className="product-info">
        <Link to={`/products/${id}`} className="product-title">
          <h3>{title}</h3>
        </Link>

        {rating && (
          <div className="product-rating">
            <Rating value={rating.rate} precision={0.1} readOnly />
            <small>({rating.count})</small>
          </div>
        )}

        <p className="product-price">
          <CurrencyFormat amount={price} />
        </p>

        {renderDesc && <p className="product-desc">{description}</p>}

        {renderAdd && (
          <button className="add-to-cart-btn" onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;

