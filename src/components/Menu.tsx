import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import Hexagon from "../assets/img/hexagon-6233333_1280.jpg";

const menuItems = [
  "Home",
  "About",
  "Experience",
  "Skills",
  "Projects",
  "Hobbies",
  "Contact",
];

export function Menu() {
  const setIsOpen = useOutletContext();
  return (
    <>
      <nav className={styles.menu}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={item}>
              <Link
                onClick={() => setIsOpen(false)}
                to={item === "Home" ? "/" : item.toLowerCase()}
              >
                <span>{`0${index + 1}`}</span>
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <h1 className={styles.title}>CONTENTS</h1>
        <div className={styles["img-container"]}>
          <img src={Hexagon} alt="menu" />
        </div>
      </nav>
    </>
  );
}
