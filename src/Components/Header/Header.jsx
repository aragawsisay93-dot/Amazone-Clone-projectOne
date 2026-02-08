
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
import { Link } from "react-router-dom";

function Header() {
  const { state } = useContext(DataContext);

  const [showCart, setShowCart] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  const [selectedAddress, setSelectedAddress] = useState(
    localStorage.getItem("amazonSelectedAddress") || "Select your address",
  );

  const addresses = [
    "Addis Ababa, Ethiopia",
    "Dubai, UAE",
    "Washington, DC, USA",
  ];

  useEffect(() => {
    localStorage.setItem("amazonSelectedAddress", selectedAddress);
  }, [selectedAddress]);

  const basketCount = state?.basket?.length || 0;

  return (
    <>
      <header className="header">
        {/* LEFT */}
        <div className="header-left">
          {/* LOGO */}
          <Link to="/" className="nav-hover logo-wrap">
            <img src={AmazonLogo} alt="Amazon" />
          </Link>

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

                <button className="add-address-btn" type="button">
                  Add a new address
                </button>
              </div>
            )}
          </div>
        </div>

        {/* SEARCH */}
        <div className="header-search">
          <select aria-label="Search category">
            <option>All</option>
            <option>Books</option>
            <option>Electronics</option>
          </select>

          <input placeholder="Search Amazon" aria-label="Search Amazon" />

          <button type="button" aria-label="Search">
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
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Learn more
                </a>
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
                  <Link to="/auth/login">
                    <button className="sign-in-btn" type="button">
                      Sign in
                    </button>
                  </Link>

                  <p>
                    New customer? <Link to="/auth/register">Start here.</Link>
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
                      <li>
                        <Link to="/orders">Orders</Link>
                      </li>
                      <li>Recommendations</li>
                      <li>Browsing History</li>
                      <li>Watchlist</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RETURNS & ORDERS */}
          <Link to="/orders" className="nav-hover text-block">
            <strong>Returns</strong>
            <br />
            <strong>& Orders</strong>
          </Link>

          {/* CART */}
          <div
            className="nav-hover cart-wrap"
            onClick={() => setShowCart((prev) => !prev)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") setShowCart((prev) => !prev);
            }}
          >
            <FaShoppingCart className="cart-icon" />
            <span className="cart-count">{basketCount}</span>

            {/* Cart text navigates to /cart without toggling sidebar */}
            <Link
              to="/cart"
              className="cart-link"
              onClick={(e) => e.stopPropagation()}
            >
              <strong>Cart</strong>
            </Link>
          </div>
        </div>
      </header>

      <LowerHeader />

      {/* Cart Sidebar */}
      {showCart && <CartSidebar close={() => setShowCart(false)} />}
    </>
  );
}

export default Header;
