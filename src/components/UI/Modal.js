import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onHide} className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <AnimatePresence>
      <motion.div
        key="modal"
        initial={{
          y: -50,
          opacity: 0,
        }}
        animate={{
          y: 20,
          opacity: 1,
        }}
        exit={{
          y: -30,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
        }}
        className={classes.modal}
      >
        <div className={classes.content}>{props.children}</div>
      </motion.div>
    </AnimatePresence>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHide={props.onHide} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Modal;
