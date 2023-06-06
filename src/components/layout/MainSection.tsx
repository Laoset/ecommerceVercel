import React from "react";
import styles from "../../styles/mainContent.module.css";
import {
  FirstSectionMain,
  FourSectionMain,
  SecondSectionMain,
  ThirdSectionMain,
} from "../utilities";
export const MainSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerFirst}>
          <FirstSectionMain />
        </div>
        <div className={styles.containerSecond}>
          <SecondSectionMain />
          <ThirdSectionMain />
          {/*<FourSectionMain /> */}
        </div>
      </div>
    </>
  );
};

export default MainSection;
