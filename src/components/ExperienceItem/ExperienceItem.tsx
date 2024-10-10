import React from "react";
import styles from "./ExperienceItem.module.css";

const ExperienceItem = ({ number, item }) => {
  const { date, title, company, description } = item;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles["header-title"]}>EXPERIENCE</h2>
        <p className={styles["experience-number"]}>{number}</p>
      </div>
      <div className={styles.date}>{date}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.company}>{company}</p>
        <div className={styles.description}>
          <ul className={styles.items}>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
