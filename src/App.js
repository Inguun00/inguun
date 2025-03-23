import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductSection from './components/ProductSection';
import Filter from './components/filter';
import Login from './components/login';
import Header from './components/Header'; 
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [filters, setFilters] = useState({
    name: '',
    color: '',
    minPrice: '',
    maxPrice: '',
  });

  const [cartItems, setCartItems] = useState(0); 

  const handleLogin = (userData) => {
    setUser(userData); 
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <Router>
      <Header
        isAuthenticated={user !== null} 
        setIsAuthenticated={setUser}
        cartItems={cartItems} 
      />
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
       
        <Route
          path="/market"
          element={
            user ? (
              <>
                <Filter onFilterChange={handleFilterChange} />
                <ProductSection filters={filters} />
              </>
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
     
      </Routes>
    </Router>
  );
};

export default App;
