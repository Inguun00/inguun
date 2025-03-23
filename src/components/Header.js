import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { FaShoppingCart } from "react-icons/fa"; 

const Header = ({ isAuthenticated, setIsAuthenticated, cartItems }) => {
  const navigate = useNavigate(); 

  const handleAuthClick = () => {
    if (isAuthenticated) {
      setIsAuthenticated(false);
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="nav-bar">
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        {/* Хэрэв хэрэглэгч нэвтрүүлсэн бол Market, үгүй бол Content хуудасруу */}
        <Link to={isAuthenticated ? "/market" : "/content"}>
          {isAuthenticated ? "Market" : "Content"}
        </Link>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        {isAuthenticated && (
          <Link to="/cart" className="cart-link">
            <FaShoppingCart size={24} />
            {cartItems > 0 && (
              <span className="cart-badge">{cartItems}</span>
            )}
          </Link>
        )}

        <button 
          onClick={handleAuthClick}
          className={`auth-button ${isAuthenticated ? 'logout' : ''}`}
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
};

export default Header;

