import React from 'react';
import { Link } from 'react-router-dom';

function CartNav() {
  return (
    <ul
      className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm"
      id="pillNav2"
      role="tablist"
      style={{
        "--bs-nav-link-color": "var(--bs-white)",
        "--bs-nav-pills-link-active-color": "var(--bs-primary)",
        "--bs-nav-pills-link-active-bg": "var(--bs-white)"
      }}
    >
      <li className="cart-1" role="presentation">
        <Link to="/home">
          <button
            className="cart-2"
            id="profile-tab2"
            data-bs-toggle="tab"
            type="button"
            role="tab"
            aria-selected="false"
          >
            HOME
          </button>
        </Link>
      </li>
      <li className="cart-1" role="presentation">
        <Link to="/bookpage">
          <button
            className="cart-2"
            id="contact-tab2"
            data-bs-toggle="tab"
            type="button"
            role="tab"
            aria-selected="false"
          >
            BOOK
          </button>
        </Link>
      </li>
    </ul>
  );
}

export default CartNav;
