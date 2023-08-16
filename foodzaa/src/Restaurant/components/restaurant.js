import'./restaurant.css'
import React, { useState } from 'react';


function  Restaurants ({ imageUrl, restname,Rating,price, Area}) {

  const [cartCount, setCartCount] = useState(0);


  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="card">
      <img src={imageUrl} alt={restname} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{restname}</h2>
        <p className="card-description">{Rating}</p>
        <p className="card-description">{Area}</p>
        <p className="card-description">{price}</p>
        <button onClick={handleAddToCart}></button>
      </div>
    </div>
  );
};

export default Restaurants;
