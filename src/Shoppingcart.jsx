import React, { useState } from "react";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      description: "6.1' Super Retina XDR Display",
      price: 20,
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      description: "6.5' Super Retina XDR Display",
      price: 40,
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      description: "6.7' Super Retina XDR Display",
      price: 70,
    },
  ];

  const addToCart = (product) => {
    const updatedCart = [...cartItems, { ...product, quantity: 1 }];
    setCartItems(updatedCart);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <div className="shopping-cart-container">
      <div className="product-list">
        <h2>Available Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <div>
                <span className="product-name">{product.name}</span>
                <p className="product-description">{product.description}</p>
              </div>
              <div>
                {cartItems.find((item) => item.id === product.id) ? (
                  <>
                    <span className="cart-quantity">
                      {
                        cartItems.find((item) => item.id === product.id)
                          .quantity
                      }
                    </span>
                    <button
                      className="remove-from-cart"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove from Cart
                    </button>
                  </>
                ) : (
                  <button
                    className="add-to-cart"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="cart">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>
                  {item.name} - ${item.price} x {item.quantity}
                </span>
                <button
                  className="remove-from-cart"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove from Cart
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
