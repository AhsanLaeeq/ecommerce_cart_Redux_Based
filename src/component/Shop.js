import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../state/index';
import { bindActionCreators } from 'redux';
import shoeImage from '../component/image/img.JPG'; // Ensure the filename matches exactly!

const Shop = () => {
  // Redux hooks to manage state and dispatch actions
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector(state => state.amount); // Get the current balance from the Redux store

  // Local state to manage the quantity of shoes
  const [quantity, setQuantity] = useState(1);
  const pricePerShoe = 100; // Fixed price per shoe

  // Function to increase quantity and update balance
  const handleIncrease = () => {
    depositMoney(pricePerShoe); // Add price to balance
    setQuantity(quantity + 1); // Increase quantity count
  };

  // Function to decrease quantity and update balance
  const handleDecrease = () => {
    if (quantity > 1) { // Ensure quantity is at least 1
      withdrawMoney(pricePerShoe); // Deduct price from balance
      setQuantity(quantity - 1); // Decrease quantity count
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      {/* Product Card */}
      <div className="card p-4 shadow-lg border-0" 
           style={{ width: '22rem', borderRadius: '15px', background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)' }}>
        
        {/* Product Image */}
        <img 
          src={shoeImage} 
          className="card-img-top mx-auto d-block rounded shadow-lg"
          alt="Adidas Shoe" 
          style={{ height: '230px', objectFit: 'cover', borderRadius: '10px' }} 
        />

        {/* Card Body */}
        <div className="card-body text-center">
          <h4 className="card-title font-weight-bold text-primary">Adidas Shoes 🏆</h4>
          <p className="card-text text-secondary">
            <strong>Price per shoe:</strong> <span className="text-dark">${pricePerShoe}</span> <br />
            <strong>Quantity:</strong> <span className="badge bg-primary p-2">{quantity}</span> <br />
            <strong>Total Price:</strong> <span className="text-success">${quantity * pricePerShoe}</span>
          </p>

          {/* Quantity Controls */}
          <div className="d-flex justify-content-center align-items-center my-3">
            <button className="btn btn-danger px-3 py-2 shadow-sm" onClick={handleDecrease} style={{ borderRadius: '50px' }}>-</button>
            <span className="fs-4 mx-3 border px-4 py-2 bg-light rounded-pill shadow-sm">{quantity}</span>
            <button className="btn btn-success px-3 py-2 shadow-sm" onClick={handleIncrease} style={{ borderRadius: '50px' }}>+</button>
          </div>

          {/* Balance Display */}
          <p className="mt-3 text-dark">
            <strong>💰 Balance:</strong> <span className="text-danger">${amount}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Shop;
