import styles from "./App.module.css";

import logo from "./assets/logo.svg";
import plus from "./assets/plus.svg";
import { TaskShowcase } from "./components/TaskShowcase";

export function App() {
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
          <input type="text" placeholder="Adicione uma nova Tarefa" />
          <button>
            <span>Criar</span>
            <img src={plus} alt="ícone de mais" />
          </button>
        </section>

        <TaskShowcase />
      </main>
    </>
  );
}
