import React from "react";
import styles from "./ExperienceItem.module.css";
import BigCircle from "../BigCircle/BigCircle";

interface ExperienceItemProps {
  number: number;
  item: {
    date: string;
    title: string;
    company: string;
    description: string[];
  };
}

const ExperienceItem = ({ number, item }: ExperienceItemProps) => {
  const { date, title, company, description } = item;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles["header-title"]}>EXPERIENCE</h2>
        <BigCircle text={number.toString()} />
      </div>
      <div className={styles.date}>
        {date}
        <br />
        {title}
        <br />
        {company}
      </div>
      <div className={styles.content}>
        <div className={styles.description}>
          <div className={styles.items}>
            {description.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
