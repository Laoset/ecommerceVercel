"use client";
import React, { useContext } from "react";
import styles from "../../styles/mainContent.module.css";
import { ModalContext } from "@/app/Context";
import Link from "next/link";

export const FirstSectionMain = () => {
  const { allProducts } = useContext(ModalContext);

  return (
    <div className={styles.firstSectionContainer}>
      {allProducts?.map((producto) =>
        producto.new ? (
          <div className={styles.textLeftContainer} key={producto.id}>
            <span>NEW PRODUCT</span>
            <h2>{producto.nombre}</h2>
            <p>{producto.description}</p>
            <Link
              href={`/detail/${producto.id}`}
              style={{ textDecoration: "none" }}
              as={`/detail/${producto.id}`}
            >
              <button className={styles.botonx}>SEE PRODUCT</button>
            </Link>
          </div>
        ) : null
      )}
    </div>
  );
};

export default FirstSectionMain;
