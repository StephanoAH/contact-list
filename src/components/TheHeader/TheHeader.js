import React from "react";
import styles from "./TheHeader.module.css";

function TheHeader() {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>Contact manager</h1>
    </div>
  );
}

export default TheHeader;
