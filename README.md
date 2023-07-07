# Cart-it

Cart-it is a custom React hook for managing a shopping cart using only the localStorage feature of web browsers.

## Installation

To install Cart-it, use the following command:

```javascript
npm install cart-it

```

## Functions

addToCart(item: any):
Adds an item to the cart.
(item: The item to add to the cart.)

removeFromCart(item: any):
Removes an item from the cart.
(item: The item to remove from the cart.)

# Usage

Import the useCart hook in your React component and start using it to manage your cart state.

```javascript
import React from 'react';
import useCart from 'cart-it';

function MyComponent() {
  const [cart, addToCart, removeFromCart] = useCart();

  // Use the cart, addToCart, and removeFromCart functions as needed

  return (
    // JSX code for your component
  );
}

```

# Example

```javascript
import React from "react";
import useCart from "cart-it";

function MyComponent() {
  const [cart, addToCart, removeFromCart] = useCart();

  const handleAddToCart = () => {
    const item = { id: 1, name: "Product 1", price: 10 };
    addToCart(item);
  };

  const handleRemoveFromCart = () => {
    const item = { id: 1, name: "Product 1", price: 10 };
    removeFromCart(item);
  };

  return (
    <div>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleRemoveFromCart}>Remove from Cart</button>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## License

Cart-it is open source software licensed under the MIT license.
