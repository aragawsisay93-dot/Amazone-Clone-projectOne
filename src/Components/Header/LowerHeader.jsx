import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import "./LowerHeader.css";

function LowerHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="lower-header">
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {/* ALL MENU */}
        <li className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <CiMenuBurger size={22} />
          <span>All</span>
        </li>

        {/* MENU ITEMS */}
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
        <li>Amazon Basics</li>
        <li>Books</li>
        <li>Electronics</li>
        <li>Prime Video</li>
        <li>Fashion</li>
        <li>Home & Kitchen</li>
      </ul>
    </nav>
  );
}

export default LowerHeader;
