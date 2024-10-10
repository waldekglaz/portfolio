interface PageTitleProps {
  text: string;
  className: string;
}

import styles from "./PageTitle.module.css";

const PageTitle = ({ text, className }: PageTitleProps) => {
  return <h1 className={`${className} ${styles.pageTitle}`}>{text}</h1>;
};

export default PageTitle;
