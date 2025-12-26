import React, { useContext, useState, useEffect } from "react";
import "./Header.css";
import AmazonLogo from "../../assets/img/Amazonelogo.png";
import LowerHeader from "./LowerHeader";
import { AiOutlineSearch } from "react-icons/ai";
import {
  FaMapMarkerAlt,
  FaShoppingCart,
  FaCaretDown,
  FaCheck,
} from "react-icons/fa";
import { DataContext } from "../DataProvider/DataProvider";
import CartSidebar from "../../Pages/Cart/CartSidebar";

function Header() {
  const { state } = useContext(DataContext);
  const [showCart, setShowCart] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  const [selectedAddress, setSelectedAddress] = useState(
    localStorage.getItem("amazonSelectedAddress") || "Select your address"
  );

  const addresses = [
    "Addis Ababa, Ethiopia",
    "Dubai, UAE",
    "Washington, DC, USA",
  ];

  useEffect(() => {
    localStorage.setItem("amazonSelectedAddress", selectedAddress);
  }, [selectedAddress]);

  return (
    <>
      <header className="header">
        {/* LEFT */}
        <div className="header-left">
          <a href="/" className="nav-hover logo-wrap">
            <img src={AmazonLogo} alt="Amazon" />
          </a>

          {/* LOCATION */}
          <div
            className="nav-hover location-wrap"
            onMouseEnter={() => setShowLocation(true)}
            onMouseLeave={() => setShowLocation(false)}
          >
            <FaMapMarkerAlt className="location-icon" />
            <div className="location-text">
              <span>Hello</span>
              <br />
              <strong>{selectedAddress}</strong>
            </div>

            {showLocation && (
              <div className="location-dropdown">
                <p className="location-title">Choose a delivery address</p>
                <ul className="location-list">
                  {addresses.map((addr) => (
                    <li
                      key={addr}
                      onClick={() => setSelectedAddress(addr)}
                      className={addr === selectedAddress ? "selected" : ""}
                    >
                      {addr}
                      {addr === selectedAddress && (
                        <FaCheck className="check-icon" />
                      )}
                    </li>
                  ))}
                </ul>
                <button className="add-address-btn">Add a new address</button>
              </div>
            )}
          </div>
        </div>

        {/* SEARCH */}
        <div className="header-search">
          <select>
            <option>All</option>
            <option>Books</option>
            <option>Electronics</option>
          </select>

          <input placeholder="Search Amazon" />

          <button>
            <AiOutlineSearch size={24} />
          </button>
        </div>

        {/* RIGHT */}
        <div className="header-right">
          {/* LANGUAGE */}
          <div
            className="nav-hover lang-wrap"
            onMouseEnter={() => setShowLang(true)}
            onMouseLeave={() => setShowLang(false)}
          >
            <img
              src="https://flagcdn.com/w20/us.png"
              alt="US Flag"
              className="lang-flag"
            />
            <span className="lang-text">EN</span>
            <FaCaretDown size={12} />

            {showLang && (
              <div className="lang-dropdown">
                <p className="lang-title">Change language</p>
                <label>
                  <input type="radio" name="lang" defaultChecked /> English - EN
                </label>
                <label>
                  <input type="radio" name="lang" /> Español - ES
                </label>
                <label>
                  <input type="radio" name="lang" /> Français - FR
                </label>
                <a href="#">Learn more</a>
              </div>
            )}
          </div>

          {/* ACCOUNT */}
          <div
            className="nav-hover account-wrap"
            onMouseEnter={() => setShowAccount(true)}
            onMouseLeave={() => setShowAccount(false)}
          >
            <div className="text-block">
              <strong>Hello, sign in</strong>
              <br />
              <strong>
                Account & Lists <span className="caret">▾</span>
              </strong>
            </div>

            {showAccount && (
              <div className="account-dropdown">
                <div className="account-top">
                  <button className="sign-in-btn">Sign in</button>
                  <p>
                    New customer? <a href="#">Start here.</a>
                  </p>
                </div>

                <div className="account-columns">
                  <div>
                    <h4>Your Lists</h4>
                    <ul>
                      <li>Create a List</li>
                      <li>Find a List or Registry</li>
                      <li>Your Saved Books</li>
                    </ul>
                  </div>

                  <div>
                    <h4>Your Account</h4>
                    <ul>
                      <li>Account</li>
                      <li>Orders</li>
                      <li>Recommendations</li>
                      <li>Browsing History</li>
                      <li>Watchlist</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RETURNS */}
          <div className="nav-hover text-block">
            <strong>Returns</strong>
            <br />
            <strong>& Orders</strong>
          </div>

          {/* CART */}
          <div
            className="nav-hover cart-wrap"
            onClick={() => setShowCart(!showCart)}
          >
            <FaShoppingCart className="cart-icon" />
            <span className="cart-count">{state.basket.length}</span>
            <strong>Cart</strong>
          </div>
        </div>
      </header>

      <LowerHeader />

      {/* Cart Sidebar */}
      {showCart && (
        <CartSidebar basket={state.basket} close={() => setShowCart(false)} />
      )}
    </>
  );
}

export default Header;
