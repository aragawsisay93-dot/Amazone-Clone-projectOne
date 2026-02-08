import React, { useContext, useMemo } from "react";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import CurrencyFormat from "../../Components/CurrencyFormal/CurrencyFormat";
import BackButton from "../../Components/BackButton";
import "./Payment.css";

function Payment() {
  const { state } = useContext(DataContext);
  const basket = state?.basket || [];

  const subtotal = useMemo(
    () => basket.reduce((sum, item) => sum + item.price * item.amount, 0),
    [basket],
  );

  const itemCount = useMemo(
    () => basket.reduce((sum, item) => sum + item.amount, 0),
    [basket],
  );

  return (
    <div className="payment-page">
      <BackButton to="/" label="Back to Home" />

      <h2>Checkout</h2>

      {basket.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="payment-container">
          <div className="payment-items">
            {basket.map((item) => (
              <div key={item.id} className="payment-item">
                <img src={item.image} alt={item.title} />
                <div className="payment-info">
                  <h4>{item.title}</h4>
                  <p>
                    {item.amount} × <CurrencyFormat amount={item.price} />
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="payment-summary">
            <p>
              Subtotal ({itemCount} items):{" "}
              <strong>
                <CurrencyFormat amount={subtotal} />
              </strong>
            </p>

            <button className="pay-btn" type="button">
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
