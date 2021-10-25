import { useState } from "react";
import TheHeader from "./components/Layout/TheHeader";
import Hero from "./components/Layout/Hero/Hero";
import AvailableFood from "./components/Food/AvailableFood";
import Cart from "./components/Cart/Cart";
import Success from "./components/UI/Success";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const [succesfullyBought, setSuccessfullyBought] = useState(false);
  const showCartHandler = () => {
    setCartIsVisible(true);
  };
  const hideCartHandler = () => {
    setCartIsVisible(false);
  };
  const showSuccessHandler = () => {
    setSuccessfullyBought(true);
    hideCartHandler();
  };
  const hideSuccessHandler = () => {
    setSuccessfullyBought(false);
  };
  return (
    <CartProvider>
      {cartIsVisible && (
        <Cart onSuccess={showSuccessHandler} onHide={hideCartHandler} />
      )}
      <TheHeader onShowCart={showCartHandler} />
      {succesfullyBought && <Success onHide={hideSuccessHandler} />}
      <Hero />

      <AvailableFood />
    </CartProvider>
  );
}

export default App;
