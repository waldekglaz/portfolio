import React from "react";
import { PageTitle } from "../../components";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div>
      <PageTitle text="Technical" className={styles.title} />
      <PageTitle text="Skills" className={styles.title} />
    </div>
  );
};

export default Skills;
