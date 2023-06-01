import { EmptyList } from "./EmptyList";
import { List } from "./List";
import styles from "./TaskShowcase.module.css";

export function TaskShowcase() {
  return (
    <section className={styles.showcase} aria-label="vitrine de tarefas">
      <header className={styles.showcaseHeader}>
        <div className={styles.headerInfo}>
          <span className={styles.infoLabel}>Tarefas criadas</span>
          <span className={styles.infoQuantity}>0</span>
        </div>
        <div className={styles.headerInfo}>
          <span className={styles.infoLabel}>Concluídas</span>
          <span className={styles.infoQuantity}>0</span>
        </div>
      </header>
      <main>
        <List />
      </main>
    </section>
  );
}
