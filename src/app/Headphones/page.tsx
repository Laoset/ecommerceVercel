"use client";
import React, { useContext } from "react";
import { NavBar, Footer } from "../../components/layout";
import Headphones from "@/components/categoryPages/HeadPhones/Headphones";
import styles from "../page.module.css";
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
          <section
            className={styles.sectionContainer}
            style={{ opacity: 0.5, backgroundColor: "#00000080", zIndex: "0" }}
          >
            <Headphones />
          </section>
          <footer
            className={styles.footerContainer}
            style={{ opacity: 0.5, backgroundColor: "#00000080", zIndex: "0" }}
          >
            <Footer />
          </footer>
        </>
      ) : (
        <>
          <nav className={styles.navBarContainer}>
            <NavBar />
          </nav>
          <section className={styles.sectionContainer}>
            <Headphones />
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
