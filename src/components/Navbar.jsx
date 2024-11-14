
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  
  return (
    <nav>
      <div className="logo">EVENT&MANAGEMENT</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
        
          <Link to="/bookpage" onClick={() => setShow(false)}>BOOK</Link>
          <Link to="/cart" onClick={() => setShow(false)}>BOOKINGS</Link>
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
