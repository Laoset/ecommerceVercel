import React from "react";
import styles from "../../styles/mainContent.module.css";
import Image from "next/image";
import Link from "next/link";
const h390 = "https://i.ibb.co/kq2NkRj/h390.webp";

export const ThirdSectionMain = () => {
  return (
    <div className={styles.contenedorDeThird}>
      <div className={styles.thirdSectionContainer}>
        <img src={h390} alt="er" className={styles.imagenThird} />
        <div className={styles.thirdTextContainer}>
          <h2>H390 USB COMPUTER HEADSET</h2>
          <p>
            Experience clear audio for video meetings, music, and beyond with a
            simple plug-and-play USB connection and a noise-canceling mic on
            your Logitech H390 headset.
          </p>

          <Link
            href={`/detail/2`}
            style={{ textDecoration: "none", color: "#f3f3f3" }}
            as={`/detail/2`}
          >
            <button className={styles.butonsitoGrayBackground}>
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.twoThirdSectionContainer}>
        <div className={styles.twoThirdTextContainer}>
          <h2>STORM PRO M808-KS</h2>
          <Link
            href={`/detail/5`}
            style={{ textDecoration: "none", color: "black" }}
            as={`/detail/5`}
          >
            <button className={styles.butonsito}>SEE PRODUCT</button>
          </Link>
        </div>
      </div>
      <div className={styles.threeThirdSectionContainer}>
        <div className={styles.threeThirdImagenContainer}></div>
        <div className={styles.threeThirdTextContainer}>
          <h2>K616-RGB FIZZ PRO</h2>
          <Link
            href={`/detail/7`}
            style={{ textDecoration: "none" }}
            as={`/detail/7`}
          >
            <button className={styles.butonsito}>SEE PRODUCT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThirdSectionMain;
