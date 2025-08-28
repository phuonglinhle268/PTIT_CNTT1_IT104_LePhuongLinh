import React, { useMemo } from "react";

export default function ShoppingCart() {
  const cartItems = [
    { id: 1, name: "San pham A", price: 100000, quantity: 2 },
    { id: 2, name: "San pham B", price: 200000, quantity: 1 },
  ];
  const total = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);
  return (
    <div style={{ padding: "20px", border: "1px solid grey" }}>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price.toLocaleString()}₫ × {item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: {total.toLocaleString()}₫</h3>
    </div>
  );
}
