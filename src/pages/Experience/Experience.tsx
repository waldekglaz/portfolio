import React from "react";
import { PageTitle, ExperienceItem } from "../../components";
import Portrait from "../../assets/img/portrait-3353699_1280.jpg";
import styles from "./Experience.module.css";

const experience = [
  {
    date: "2021 - Present",
    title: "Junior Front-End Developer",
    company: "Cheil",
    description: [
      "I work as a junior front-end developer at Cheil, where I look after Samsung.com websites and applications for the African and Turkish markets. I work with a team of developers and designers to create and maintain the websites and applications.",
      "I am responsible for the front-end development of the Samsung UK support application. I work with a team of developers and designers to create and maintain the application.",
      "I work on Athena - Cheil's internal testing tool. I am responsible for the UI of the tool. I also develop database of tests.",
    ],
  },
  {
    date: "2019 - 2021",
    title: "Web Developer",
    company: "Freelance",
    description: [
      "I worked as a web developer for a variety of clients. I developed websites and applications for small businesses and individuals.",
      "I worked on a variety of projects, including e-commerce websites, blogs, and portfolios.",
      "I worked with a variety of technologies, including HTML, CSS, JavaScript, React, and Node.js.",
    ],
  },
  {
    date: "2017 - 2019",
    title: "Web Developer",
    company: "Freelance",
    description: [
      "I worked as a web developer for a variety of clients. I developed websites and applications for small businesses and individuals.",
      "I worked on a variety of projects, including e-commerce websites, blogs, and portfolios.",
      "I worked with a variety of technologies, including HTML, CSS, JavaScript, React, and Node.js.",
    ],
  },
  {
    date: "2015 - 2017",
    title: "Web Developer",
    company: "Freelance",
    description: [
      "I worked as a web developer for a variety of clients. I developed websites and applications for small businesses and individuals.",
      "I worked on a variety of projects, including e-commerce websites, blogs, and portfolios.",
      "I worked with a variety of technologies, including HTML, CSS, JavaScript, React, and Node.js.",
    ],
  },
];

const Experience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <PageTitle text="Experience" className={styles.title} />
        <div className={styles.summary}>
          <p className={styles.text}>
            I have experience in front-end development, back-end development,
            and full-stack development. I have worked with a variety of
            technologies and tools, and I am always eager to learn more.
          </p>
          <p className={styles.text}>LATEST</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <img className={styles.portrait} src={Portrait} alt="portrait" />
        <div className={styles.items}>
          {experience.map((item, index) => (
            <ExperienceItem number={index + 1} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
