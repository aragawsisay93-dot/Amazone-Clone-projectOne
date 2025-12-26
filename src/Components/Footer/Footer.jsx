import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* BACK TO TOP */}
      <div className="back-to-top">
        <a href="#top">Back to top</a>
      </div>

      {/* MAIN LINKS SECTION */}
      <div className="footer-links">
        {/* Column 1 */}
        <div className="footer-column">
          <h4>Get to Know Us</h4>
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About Amazon</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Amazon Devices</a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h4>Make Money with Us</h4>
          <ul>
            <li>
              <a href="#">Sell products on Amazon</a>
            </li>
            <li>
              <a href="#">Sell apps on Amazon</a>
            </li>
            <li>
              <a href="#">Become an Affiliate</a>
            </li>
            <li>
              <a href="#">Advertise Your Products</a>
            </li>
            <li>
              <a href="#">Self-Publish with Us</a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h4>Amazon Payment Products</h4>
          <ul>
            <li>
              <a href="#">Amazon Rewards Visa Signature Cards</a>
            </li>
            <li>
              <a href="#">Amazon Store Card</a>
            </li>
            <li>
              <a href="#">Amazon Business Card</a>
            </li>
            <li>
              <a href="#">Amazon Gift Cards</a>
            </li>
            <li>
              <a href="#">Shop with Points</a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-column">
          <h4>Let Us Help You</h4>
          <ul>
            <li>
              <a href="#">Your Account</a>
            </li>
            <li>
              <a href="#">Your Orders</a>
            </li>
            <li>
              <a href="#">Shipping Rates & Policies</a>
            </li>
            <li>
              <a href="#">Returns & Replacements</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Amazon Clone. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
