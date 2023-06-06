"use client";
import styles from "./page.module.css";
import { NavBar, Footer, MainSection } from "../components/layout";
import { ModalContext } from "./Context";
import { useContext } from "react";

export default function Home() {
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
            <MainSection />
          </section>
          <footer className={styles.footerContainer} style={{ opacity: 0.5 }}>
            <Footer />
          </footer>
        </>
      ) : (
        <>
          <nav className={styles.navBarContainer} style={{ opacity: 1 }}>
            <NavBar />
            {/* <hr style={{ border: "1px solid gray", width: "85%" }} /> */}
          </nav>
          <section className={styles.sectionContainer}>
            <MainSection />
          </section>
          <footer className={styles.footerContainer} style={{ opacity: 1 }}>
            <Footer />
          </footer>
        </>
      )}
    </>
  );
}
