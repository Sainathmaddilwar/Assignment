import styles from "../Loader/Loader.module.css";
import React from "react";

function Loader() {
  return (
    <div className={styles.spinner}>
      <div className={styles.bounce1}></div>
      <div className={styles.bounce2}></div>
      <div className={styles.bounce3}></div>
    </div>
  );
}

export default Loader;
