import React from "react";
import styles from "../../styles/modalCart.module.css";
import { useContext } from "react";
import { ModalContext } from "@/app/Context";
import { motion } from "framer-motion";
import Link from "next/link";

const ModalCart = () => {
  //me traigo el carro actual
  const { cart, closeModal } = useContext(ModalContext);
  //func para money
  const totalMoney = () => {
    let dinero = 0;

    cart.forEach((producto) => {
      dinero = producto.price + dinero;
    });
    return dinero;
  };
  const miDineroTotal = totalMoney();
  return (
    <motion.div className={styles.container}>
      <div className={styles.nav}>
        <h3 style={{ marginLeft: "10px" }}>My Cart </h3>
        <button onClick={closeModal}>X</button>
      </div>
      <div className={styles.itemsContainer}>
        {cart?.map((productos) => (
          <div key={`2+${productos.id}`} className={styles.productoContainers}>
            <img src={productos.image} alt="tobuy" className={styles.imagen} />
            <div className={styles.textproductoContainer}>
              <p>{productos.nombre}</p>
              <span>${productos.price}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <hr style={{ border: "1px solid gray", width: "85%" }} />
        <div className={styles.sonFooter}>
          <p>Total Product:</p>
          <p>${miDineroTotal}</p>
        </div>
        <Link
          href={"/checkout"}
          className={styles.butonsito}
          style={{ textDecoration: "none" }}
        >
          <span className={styles.spansitop}>Pay</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default ModalCart;
