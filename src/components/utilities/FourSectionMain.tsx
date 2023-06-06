import React from "react";
import styles from "../../styles/mainContent.module.css";
import Image from "next/image";
export const FourSectionMain = () => {
  return (
    <div className={styles.contenedorDeFour}>
      <div className={styles.fourTextContainer}>
        <h2>
          BRINGING YOU THE <span style={{ color: "#de354c" }}>BEST</span>{" "}
          PERIPHERALS GEAR
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className={styles.fourImagenContainer}>
        <Image
          src="https://i.ibb.co/fSnmtV9/fondo.webp"
          alt="er"
          width={1000}
          height={1000}
          quality={100}
          className={styles.imagenLastSection}
        />
      </div>
    </div>
  );
};

export default FourSectionMain;
