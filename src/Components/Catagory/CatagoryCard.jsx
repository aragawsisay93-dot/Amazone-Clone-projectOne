import React from "react";
import { Link } from "react-router-dom";
import "./Catagory.css";

function CatagoryCard({ data }) {
  if (!data) return null;

  return (
    <div className="catagory-card">
      <Link to={`/category/${data.Name}`}>
        <img src={data.imglink} alt={data.title} className="card-image" />

        <div className="card-content">
          <h2 className="card-title">{data.title}</h2>
          <p className="card-name">{data.Name}</p>
          <button className="shop-btn">Shop Now</button>
        </div>
      </Link>
    </div>
  );
}


export default CatagoryCard;

