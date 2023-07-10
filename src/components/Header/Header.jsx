import styles from "./Header.module.css";
import like from "../../assets/icons/Vectorlike.svg";
import corzina from "../../assets/icons/Vectorcorzina.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <Link to="/">
          <h3>QPICK</h3>
        </Link>
        <div className={styles.icons}>
          <img alt="like" src={like} />
          <Link to="/ShoppingCart">
            <img alt="corzina" src={corzina} />
          </Link>
        </div>
      </div>
    </>
  );
}
