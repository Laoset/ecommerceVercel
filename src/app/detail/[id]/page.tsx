"use client";
import React, { useContext, useEffect, useState } from "react";
import { NavBar, Footer } from "../../../components/layout";
import styles from "../.././../styles/detail.module.css";
import Image from "next/image";
import { BsFillBoxFill } from "react-icons/bs";
import RandomSecondSection from "@/components/utilities/RandomSecondSection";
import { ModalContext } from "@/app/Context";
interface Product {
  id: number;
  nombre: string;
  price: number;
  image: string;
  category: string;
  description: string;
  details: Array<string>;
  inBox: Array<string>;
  new: boolean;
}
export default function Page({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const { isModalOpen, changeOpenModal, addToCart, closeModal } =
    useContext(ModalContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${params.id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);
  return (
    <>
      {isModalOpen ? (
        <div onClick={closeModal}>
          <nav className={styles.navBarContainer}>
            <NavBar />
          </nav>
          <section className={styles.sectionContainer} style={{ opacity: 0.5 }}>
            {product && (
              <div key={`2${product.id}`}>
                <div className={styles.containerHijo}>
                  <div className={styles.card}>
                    <img
                      src={product.image}
                      alt="fh"
                      className={styles.imagen}
                    />
                  </div>
                  <div className={styles.textRightContainer}>
                    <h2>{product.nombre}</h2>
                    <p>{product.description}</p>
                    <button onClick={() => addToCart(product)}>
                      ADD TO CART
                    </button>
                  </div>
                </div>
                <div className={styles.details}>
                  <h2>DETAILS</h2>
                  <p className={styles.subtitleP}>{product.details[0]}</p>
                  <p className={styles.textP}>{product.details[1]}</p>
                  <p className={styles.subtitleP}>{product.details[2]}</p>
                  <p className={styles.textP}>{product.details[3]}</p>
                </div>
                <div className={styles.inBox}>
                  <BsFillBoxFill size={40} />
                  <div className={styles.box}>
                    <h2>In The Box</h2>
                    <div className={styles.elementosbox}>
                      {product.inBox.map((boxito, index) => (
                        <>
                          <li key={index}>{boxito}</li>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className={styles.containerSecond}>
              <h2>This might interest you</h2>
              <div>
                <RandomSecondSection />
              </div>
            </div>
          </section>
          <footer className={styles.footerContainer} style={{ opacity: 0.5 }}>
            <Footer />
          </footer>
        </div>
      ) : (
        <>
          <nav className={styles.navBarContainer}>
            <NavBar />
          </nav>
          <section className={styles.sectionContainer}>
            {product && (
              <div key={`4${product.id}`}>
                <div className={styles.containerHijo}>
                  <div className={styles.card}>
                    <Image
                      src={product.image}
                      alt="fh"
                      width={1000}
                      height={1000}
                      quality={100}
                      className={styles.imagen}
                    />
                  </div>
                  <div className={styles.textRightContainer}>
                    <h2>{product.nombre}</h2>
                    <p>{product.description}</p>
                    <button onClick={() => addToCart(product)}>
                      ADD TO CART
                    </button>
                  </div>
                </div>
                <div className={styles.details}>
                  <h2>DETAILS</h2>
                  <p className={styles.subtitleP}>{product.details[0]}</p>
                  <p className={styles.textP}>{product.details[1]}</p>
                  <p className={styles.subtitleP}>{product.details[2]}</p>
                  <p className={styles.textP}>{product.details[3]}</p>
                </div>
                <div className={styles.inBox}>
                  <BsFillBoxFill size={40} />
                  <div className={styles.box}>
                    <h2>In The Box</h2>
                    <div className={styles.elementosbox}>
                      {product.inBox.map((boxito, index) => (
                        <div key={`12312${index}`}>
                          <li>{boxito}</li>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* <div className={styles.containerSecond}>
              <h2>This might interest you</h2>
              <div>
                <RandomSecondSection />
              </div>
            </div> */}
          </section>
          <footer className={styles.footerContainer}>
            <Footer />
          </footer>
        </>
      )}
    </>
  );
}
