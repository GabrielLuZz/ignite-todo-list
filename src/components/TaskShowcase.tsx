import { ITask } from "../interfaces/task";
import { calculateConcluded } from "../utils/calculateConcluded";
import { EmptyList } from "./EmptyList";
import { List } from "./List";
import styles from "./TaskShowcase.module.css";

interface IProps {
  tasks: ITask[];
  toggleTaskState: (task: ITask) => void;
  deleteTask: (task: ITask) => void;
}

export function TaskShowcase({ tasks, toggleTaskState, deleteTask }: IProps) {
  const concludedOnes = calculateConcluded(tasks);

  return (
    <section className={styles.showcase} aria-label="vitrine de tarefas">
      <header className={styles.showcaseHeader}>
        <div className={styles.headerInfo}>
          <span className={styles.infoLabel}>Tarefas criadas</span>
          <span className={styles.infoQuantity}>{tasks.length}</span>
        </div>
        <div className={styles.headerInfo}>
          <span className={styles.infoLabel}>Concluídas</span>
          <span className={styles.infoQuantity}>
            {concludedOnes > 0 ? `${concludedOnes} de ${tasks.length}` : 0}
          </span>
        </div>
      </header>
      <main>
        {tasks.length > 0 ? (
          <List
            tasks={tasks}
            toggleTaskState={toggleTaskState}
            deleteTask={deleteTask}
          />
        ) : (
          <EmptyList />
        )}
      </main>
    </section>
  );
}
