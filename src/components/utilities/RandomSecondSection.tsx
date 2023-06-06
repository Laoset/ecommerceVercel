import React, { useContext } from "react";
import styles from "../../styles/mainContent.module.css";
import Image from "next/image";
import { ModalContext } from "@/app/Context";
import Link from "next/link";

export const RandomSecondSection = () => {
  const { randomThreeProducts } = useContext(ModalContext);
  return (
    <div className={styles.secondSectionContainer}>
      <div className={styles.threeImagesContainer}>
        {randomThreeProducts.map((productos) => {
          return (
            <Link
              href={`/${productos.category}`}
              prefetch={false}
              key={productos.id}
              style={{ textDecoration: "none", color: "black" }}
              as={`/${productos.category}`}
            >
              <div className={styles.containerImagenDetail}>
                <img
                  src={productos.image}
                  alt="first"
                  className={styles.imagenDetail}
                  style={{ width: "50%" }}
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
  );
};

export default RandomSecondSection;
