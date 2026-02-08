import React, { useContext } from "react";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import CurrencyFormat from "../../Components/CurrencyFormal/CurrencyFormat";
import BackButton from "../../Components/BackButton";
import "./Orders.css";

function Orders() {
  const { state } = useContext(DataContext);
  const basket = state?.basket || [];

  // Demo: showing current basket items as "recent order"
  return (
    <div className="orders-page">
      <BackButton to="/" label="Back to Home" />

      <h2>Your Orders</h2>

      {basket.length === 0 ? (
        <p className="empty">No orders yet.</p>
      ) : (
        <div className="orders-grid">
          {basket.map((item) => (
            <div key={item.id} className="order-card">
              <img src={item.image} alt={item.title} />
              <div className="order-info">
                <h4>{item.title}</h4>

                <p>
                  Qty: <strong>{item.amount}</strong>
                </p>

                <p>
                  Price:{" "}
                  <strong>
                    <CurrencyFormat amount={item.price} />
                  </strong>
                </p>

                <button className="order-btn" type="button">
                  View details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
