import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}><a
          href="https://github.com/traez/nextjs14-full-stack-app"
          target="_blank"
          className={styles.footer}
        >
          Nextjs14 FullStack App
        </a></div>
      <div className={styles.text}>
        Zeeofor Technologies © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
