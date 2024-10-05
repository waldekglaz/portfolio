import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav className={styles.menu}>
      <Link to="/">Home</Link>
      <ul>
        <li>Portfolio</li>
        <li>About</li>
        <li>Contact</li>
        <li>Search</li>
      </ul>
    </nav>
  );
}
