"use client";
import styles from "../../styles/navBar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { ModalContext } from "@/app/Context";
import { useContext } from "react";
import ModalCart from "@/components/layout/modalCart";
import { motion } from "framer-motion";
export const NavBar: () => JSX.Element = () => {
  const { isModalOpen, changeOpenModal } = useContext(ModalContext);
  return (
    <>
      {isModalOpen && (
        <motion.div
          className={styles.container}
          style={{
            background: "#fff",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.2 }}
        >
          <ModalCart />
        </motion.div>
      )}
      <div className={styles.containerNavbar}>
        <div className={styles.containerInsideNavbar}>
          <div className={styles.titleContainer}>
            <h1>Periféricool</h1>
          </div>
          <div className={styles.linksContainer}>
            <Link href="/" className={styles.link} prefetch={false}>
              HOME
            </Link>
            <Link href="/Headphones" className={styles.link} prefetch={false}>
              HEADPHONES
            </Link>
            <Link href="/Mouse" className={styles.link} prefetch={false}>
              MOUSE
            </Link>
            <Link href="/Keyboards" className={styles.link} prefetch={false}>
              KEYBOARDS
            </Link>
          </div>
          <div className={styles.buttonContainer}>
            <AiOutlineShoppingCart onClick={changeOpenModal} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
