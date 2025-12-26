import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormal/CurrencyFormat";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import "./CartSidebar.css";

function CartSidebar({ close }) {
  const { state, dispatch } = useContext(DataContext);
  const basket = state.basket;
  const user = state.user; // make sure user is in state
  const navigate = useNavigate();

  const increment = (id) => dispatch({ type: "INCREMENT_ITEM", itemId: id });
  const decrement = (id) => dispatch({ type: "DECREMENT_ITEM", itemId: id });
  const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", itemId: id });

  const proceedToCheckout = () => {
    if (!user) {
      navigate("/auth/login");
    } else if (basket.length === 0) {
      alert("Your cart is empty!");
    } else {
      navigate("/payments");
    }
  };

  return (
    <div className="cart-backdrop" onClick={close}>
      <div className="cart-container" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Shopping Cart</h2>
          <button className="close-btn" onClick={close}>
            ×
          </button>
        </div>

        {basket.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {basket.map((item) => (
                <div key={item.id} className="product-card">
                  <img src={item.image} alt={item.title} />
                  <div className="product-info">
                    <h4>{item.title}</h4>
                    <p>
                      <CurrencyFormat amount={item.price} />
                    </p>
                    <div className="quantity-controls">
                      <button onClick={() => decrement(item.id)}>-</button>
                      <span>{item.amount}</span>
                      <button onClick={() => increment(item.id)}>+</button>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-subtotal">
              <p>
                Subtotal ({basket.reduce((sum, item) => sum + item.amount, 0)}{" "}
                items):
                <strong>
                  <CurrencyFormat
                    amount={basket.reduce(
                      (sum, item) => sum + item.price * item.amount,
                      0
                    )}
                  />
                </strong>
              </p>
              <button className="checkout-btn" onClick={proceedToCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartSidebar;
