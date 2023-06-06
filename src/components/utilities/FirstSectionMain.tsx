"use client";
import React, { useContext } from "react";
import styles from "../../styles/mainContent.module.css";
import { ModalContext } from "@/app/Context";
import Link from "next/link";

export const FirstSectionMain = () => {
  const { allProducts } = useContext(ModalContext);

  return (
    <div className={styles.firstSectionContainer}>
      {allProducts
        ? allProducts?.map((producto) =>
            producto.new ? (
              <div className={styles.textLeftContainer} key={producto.id}>
                <span>NEW PRODUCT</span>
                <h2>{producto.nombre}</h2>
                <p>{producto.description}</p>

                <button>
                  <Link
                    href={`/detail/${producto.id}`}
                    style={{ textDecoration: "none", color: "#f3f3f3" }}
                    as={`/detail/${producto.id}`}
                  >
                    SEE PRODUCT
                  </Link>
                </button>
              </div>
            ) : null
          )
        : null}
    </div>
  );
};

export default FirstSectionMain;
