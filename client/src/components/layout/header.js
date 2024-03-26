import React from "react";
import { NavLink } from "react-router-dom";
import "./style/header.css";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import { useCart } from "../../context/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const { cartItems } = useCart();
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setTimeout(() => {
      toast.success("Logged out successfully!");
    }, 3000);
    localStorage.removeItem("cartItems");
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    
  };

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        {/* Brand */}
        <NavLink to="/" className="navbar-brand">
          URBAN SNITCH
        </NavLink>

        {/* Hamburger Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            {/* Centered Items */}
            <li className="nav-item item-border">
              <NavLink to="/women" className="nav-link" aria-current="page">
                Women
              </NavLink>
            </li>
            <li className="nav-item item-border">
              <NavLink to="/men" className="nav-link" aria-current="page">
                Men
              </NavLink>
            </li>
            <li className="nav-item item-border">
              <NavLink to="/kids" className="nav-link" aria-current="page">
                Kids
              </NavLink>
            </li>
          </ul>

          {/* Right Aligned Items for Small Screens */}
          <ul className="navbar-nav ms-auto d-lg-none">
            {!auth.user ? (
              <>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    onClick={handleLogout}
                    to="/login"
                    className="nav-link"
                  >
                    Logout({auth.user.name})
                  </NavLink>
                </li>
              </>
            )}

            <li className="nav-item">
              <NavLink to="/cart" className="nav-link" aria-current="page">
                <FontAwesomeIcon icon={faShoppingBag} />
                <span class='badge badge-warning' id='lblCartCount'> {cartItems.length} </span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Aligned Items for Full Screen */}
        <div className="d-none d-lg-block">
          <ul className="navbar-nav ms-auto">
            {!auth.user ? (
              <>
                <li className="nav-item item-border">
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    onClick={handleLogout}
                    to="/login"
                    className="nav-link"
                  >
                    Logout ({auth.user.name})
                  </NavLink>
                </li>
              </>
            )}

            <li className="nav-item">
              <NavLink to="/cart" className="nav-link" aria-current="page">
                <FontAwesomeIcon icon={faShoppingBag} />
                <span class='badge badge-warning' id='lblCartCount'> {cartItems.length} </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
