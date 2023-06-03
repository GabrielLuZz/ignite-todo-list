import { useState, ChangeEvent } from "react";
import styles from "./App.module.css";

import logo from "./assets/logo.svg";
import plus from "./assets/plus.svg";
import { TaskShowcase } from "./components/TaskShowcase";
import { ITask } from "./interfaces/task";
import { tasksMock } from "./mocks/tasks";
import { v4 as uuidv4 } from "uuid";

export function App() {
  const [tasks, setTaks] = useState<ITask[]>(tasksMock);
  const [taskText, setTaskText] = useState<string>("");

  const addNewTask = () => {
    if (taskText) {
      const newTask: ITask = {
        id: uuidv4(),
        title: taskText,
        isCompleted: false,
      };

      setTaks((state) => [...state, newTask]);
      setTaskText("");
    }
  };

  const toggleTaskState = (task: ITask) => {
    const tasksMap = tasks.map((taskMap) => {
      if (taskMap.id === task.id)
        return { ...taskMap, isCompleted: !taskMap.isCompleted };

      return taskMap;
    });

    setTaks(tasksMap);
  };

  const deleteTask = (task: ITask) => {
    const filteredTasks = tasks.filter((item) => item.id !== task.id);

    setTaks(filteredTasks);
  };

  const handleTaskTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };

  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="Logo" />
      </header>
      <main className={styles.main}>
        <section
          className={styles.searchableArea}
          aria-label="seção de pesquisa"
        >
          <input
            type="text"
            placeholder="Adicione uma nova Tarefa"
            value={taskText}
            onChange={handleTaskTextChange}
          />
          <button onClick={addNewTask}>
            <span>Criar</span>
            <img src={plus} alt="ícone de mais" />
          </button>
        </section>

        <TaskShowcase
          tasks={tasks}
          toggleTaskState={toggleTaskState}
          deleteTask={deleteTask}
        />
      </main>
    </>
  );
}
