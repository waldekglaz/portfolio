import React, { FC } from "react";
import styles from "./BigCircle.module.css";

interface BigCircleProps {
  text: string;
}

const BigCircle: FC<BigCircleProps> = ({ text }) => {
  return <div className={styles.circle}>{text}</div>;
};

export default BigCircle;
