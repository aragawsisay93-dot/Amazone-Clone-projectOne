import React, { useContext } from "react";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import CurrencyFormat from "../../Components/CurrencyFormal/CurrencyFormat";
import "./Cart.css";

function Cart({ showCart, setShowCart }) {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const total = basket.reduce((sum, item) => sum + item.price * item.amount, 0);

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };

  const increment = (id) => {
    dispatch({
      type: "INCREMENT_AMOUNT",
      id,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: "DECREMENT_AMOUNT",
      id,
    });
  };

  return showCart ? (
    <div className="cart-overlay" onClick={() => setShowCart(false)}>
      <div
        className="cart-sidebar"
        onClick={(e) => e.stopPropagation()} // prevent overlay click close
      >
        <button className="close-btn" onClick={() => setShowCart(false)}>
          &times;
        </button>

        <h2>Hello, {user?.email || "Guest"}</h2>
        <h3>Your Shopping Basket</h3>
        <hr />

        {basket.length === 0 ? (
          <p>Your Amazon Cart is empty</p>
        ) : (
          basket.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-item-info">
                <p>{item.title}</p>
                <CurrencyFormat amount={item.price} />
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
          ))
        )}

        {basket.length > 0 && (
          <div className="cart-subtotal">
            <span>
              Subtotal ({basket.length} items):{" "}
              <strong>
                <CurrencyFormat amount={total} />
              </strong>
            </span>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </div>
  ) : null;
}

export default Cart;
