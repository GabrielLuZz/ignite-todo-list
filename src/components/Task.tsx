import styles from "./Task.module.css";

import trash from "../assets/trash.svg";

export function Task() {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.check} ${styles.unchecked}`}></div>
      <p className={styles.text}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer dsfsdf.
      </p>
      <img className={styles.trash} src={trash} alt="ícone de lixeira" />
    </div>
  );
}
