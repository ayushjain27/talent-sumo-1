import React from "react";
import styles from "./Logo1.module.css";

const Logo1 = () => {
  return (
    <>
      <h1 className={styles.heading}>Leaderboard REPORT</h1>
      <img className={styles.img} src="./images/Logo.png" alt="" />
      <div className={styles.info}>
        <div>
      <h4 className={styles.heading1}>Interview : Product Mgmt V1.0</h4>
      <h4 className={styles.heading1}>09-07-2022</h4>
      <h4 className={styles.heading1}>CANDIDATE NAME</h4>
      <h4 className={styles.heading1}>Authored by: AI Coach</h4>
      </div>
      <div className={styles.logoName}>
      <h4 className={styles.heading1}>LOGO NAME</h4>
      </div>
      </div>
    </>
  );
};

export default Logo1;
