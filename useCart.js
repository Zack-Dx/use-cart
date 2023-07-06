import { useState, useEffect } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);
  // Add to cart

  function addToCart(item) {
    const newCart = [...cart, item];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
  function removeFromCart(item) {
    const filteredItems = cart.filter((product) => product.name !== item.name);
    setCart(filteredItems); // Asynchronously
    localStorage.setItem("cart", JSON.stringify(filteredItems));
  }
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);
  return [cart, addToCart, removeFromCart];
};

export default useCart;
