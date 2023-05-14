import React from "react";
import styles from "./Header.module.css";
import like from "../../assets/icons/Vectorlike.svg";
import corzina from "../../assets/icons/Vectorcorzina.svg";

export default function Header() {
  return (
    <div className={styles.container}>
      <h3>QPICK</h3>
      <div className={styles.icons}>
        <img alt="like" src={like}></img>
        <img alt="corzina" src={corzina}></img>
      </div>
    </div>
  );
}
