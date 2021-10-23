import { useState } from "react";
import TheHeader from "./components/Layout/TheHeader";
import Hero from "./components/Layout/Hero/Hero";
import AvailableFood from "./components/Food/AvailableFood";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  };
  const hideCartHandler = () => {
    setCartIsVisible(false);
  };
  return (
    <>
      {cartIsVisible && <Cart onHide={hideCartHandler} />}
      <TheHeader onShowCart={showCartHandler} />
      <Hero />
      <AvailableFood />
    </>
  );
}

export default App;
