import React from "react";
import CardList from "../../components/CardList/CardList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <div className={styles.container}>
      <Header />
      <CardList />
      <Footer />
    </div>
  );
}
