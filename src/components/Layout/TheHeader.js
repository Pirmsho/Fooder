import classes from "./TheHeader.module.css";
import CartButton from "./CartButton";
const TheHeader = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.main_title}>Fooder</h1>
        <CartButton />
      </header>
    </>
  );
};

export default TheHeader;
