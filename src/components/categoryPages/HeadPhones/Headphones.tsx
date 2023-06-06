"use client";
import React, { useContext } from "react";
import styles from "../../../styles/headphones.module.css";
import Image from "next/image";
import { ModalContext } from "@/app/Context";
import Link from "next/link";

const Headphones = () => {
  const { headphones } = useContext(ModalContext);

  return (
    <div className={styles.containerAllSections}>
      <div className={styles.containerFirst}>
        <h2>HEADPHONES</h2>
      </div>
      <div className={styles.containerSecond}>
        {headphones?.map((producto, index) => (
          <div className={styles.containerHijo} key={producto.id}>
            {index % 2 === 0 ? (
              <>
                <div className={styles.card}>
                  <img
                    src={producto.image}
                    alt="fh"
                    className={styles.imagen}
                  />
                </div>
                <div className={styles.textRightContainer}>
                  <h2>{producto.nombre}</h2>
                  <p>{producto.description}</p>
                  <button>
                    <Link
                      href={`/detail/${producto.id}`}
                      className={styles.textRightContainerLink}
                      prefetch={false}
                      as={`/detail/${producto.id}`}
                    >
                      SEE PRODUCT
                    </Link>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className={styles.textLeftContainer}>
                  <h2>{producto.nombre}</h2>
                  <p>{producto.description}</p>
                  <button>
                    <Link
                      href={`/detail/${producto.id}`}
                      className={styles.textLeftContainerLink}
                      prefetch={false}
                      as={`/detail/${producto.id}`}
                    >
                      SEE PRODUCT
                    </Link>
                  </button>
                </div>
                <div className={styles.card}>
                  <Image
                    src={producto.image}
                    alt="fh"
                    width={1000}
                    height={1000}
                    quality={100}
                    className={styles.imagen}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Headphones;
