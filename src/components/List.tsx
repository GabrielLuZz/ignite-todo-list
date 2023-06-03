import { ITask } from "../interfaces/task";
import styles from "./List.module.css";
import { Task } from "./Task";

interface IProps {
  tasks: ITask[];
  toggleTaskState: (task: ITask) => void;
  deleteTask: (task: ITask) => void;
}

export function List({ tasks, toggleTaskState, deleteTask }: IProps) {
  return (
    <div className={styles.wrapper}>
      {tasks?.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTaskState={toggleTaskState}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}
