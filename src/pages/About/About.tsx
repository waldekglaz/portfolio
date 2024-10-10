import Shirt from "../../assets/img/shirt-2947548_1280.jpg";
import { PageTitle } from "../../components";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.img} src={Shirt} alt="shirt" />
        <div className={styles.col}>
          <p className={styles.text}>
            I am a front-end developer with a passion for creating beautiful and
            functional user interfaces. I am proficient in HTML, CSS, and
            JavaScript and have experience working with React, TypeScript, and
            Redux. I am a quick learner and enjoy working in a team environment.
          </p>
          <p className={styles.text}>
            I am currently looking for a new role and am open to opportunities
            in the European Union and the United Kingdom. Please feel free to
            contact me if you have any questions or would like to discuss
            potential opportunities.
          </p>
        </div>
        <div className={styles.col}>
          <p className={styles.text}>
            In my free time, I enjoy reading, playing video games, and watching
            movies. I also enjoy spending time outdoors and going for walks in
            the countryside. I am a big fan of science fiction and fantasy
          </p>
          <p>
            I am a front-end developer with a passion for creating beautiful and
            functional user interfaces. I am proficient in HTML, CSS, and
            JavaScript and have experience working with React, TypeScript, and
            Redux. I am a quick learner and enjoy working in a team environment.
          </p>
        </div>
      </div>
      <PageTitle text="about me" className={styles.title} />
    </div>
  );
};

export default About;
