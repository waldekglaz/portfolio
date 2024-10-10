import Image2 from "../../assets/img/web-3706561_1280.jpg";
import styles from "./WelcomePage.module.css";

const WelcomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles["top-layer"]}>
        <div className={styles.title}>RE-</div>
        <img src={Image2} alt="image " />
        <div className={styles.box}></div>
      </div>
      <div className={styles["bottom-layer"]}>
        <div className={styles.content}>
          <div className={styles.title}>SUME</div>
          <div className={styles.vertical}>PRESENTATION</div>
          <div className={styles["personal-info"]}>
            <div className={styles.line}>
              <div className="label">Name:</div>
              <div className="value">Waldemar Glaz</div>
            </div>
            <div className={styles.line}>
              <div className="label">Location:</div>
              <div className="value">European Union / United Kingdom</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
