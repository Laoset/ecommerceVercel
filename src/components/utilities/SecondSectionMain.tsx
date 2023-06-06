import React, { useContext } from "react";
import styles from "../../styles/mainContent.module.css";
// import Image from "next/image";
import { ModalContext } from "@/app/Context";
import Link from "next/link";

export const SecondSectionMain = () => {
  const { threeProducts } = useContext(ModalContext);
  return (
    <>
      <div className={styles.secondSectionContainer}>
        <div className={styles.threeImagesContainer}>
          {threeProducts.map((productos, index) => {
            return (
              <Link
                href={`/${productos.category}`}
                prefetch={false}
                key={index}
                style={{ textDecoration: "none", color: "black" }}
                className={styles.linkContainer}
                as={`/${productos.category}`}
              >
                <div className={styles.containerImagen}>
                  <img
                    src={productos.image}
                    alt="landing"
                    className={styles.imagen}
                  />

                  <p style={{ textTransform: "uppercase" }}>
                    {productos.category}
                  </p>
                  <span>SHOP</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SecondSectionMain;
