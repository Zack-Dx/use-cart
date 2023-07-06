import { useState, useEffect } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    try {
      const newCart = [...cart, item];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  }

  function removeFromCart(item) {
    try {
      const index = cart.findIndex((product) => product.name === item.name);
      if (index !== -1) {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  }

  useEffect(() => {
    try {
      const storedCart = JSON.parse(localStorage.getItem("cart"));
      if (storedCart) {
        setCart(storedCart);
      }
    } catch (error) {
      console.error("Error retrieving cart from localStorage:", error);
    }
  }, []);

  return [cart, addToCart, removeFromCart];
};

export default useCart;
