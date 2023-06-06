"use client";
import React, { useContext } from "react";
import { NavBar, Footer } from "../../components/layout";
import styles from "../page.module.css";
import Keyboards from "@/components/categoryPages/Keyboards/Keyboards";
import { ModalContext } from "../Context";

const Page = () => {
  const { isModalOpen, changeOpenModal } = useContext(ModalContext);

  return (
    <>
      {isModalOpen ? (
        <>
          <nav className={styles.navBarContainer}>
            <NavBar />
            <hr style={{ border: "1px solid gray", width: "85%" }} />
          </nav>
          <section className={styles.sectionContainer} style={{ opacity: 0.5 }}>
            <Keyboards />
          </section>
          <footer className={styles.footerContainer} style={{ opacity: 0.5 }}>
            <Footer />
          </footer>
        </>
      ) : (
        <>
          <nav className={styles.navBarContainer}>
            <NavBar />
            <hr style={{ border: "1px solid gray", width: "85%" }} />
          </nav>
          <section className={styles.sectionContainer}>
            <Keyboards />
          </section>
          <footer className={styles.footerContainer}>
            <Footer />
          </footer>
        </>
      )}
    </>
  );
};

export default Page;
