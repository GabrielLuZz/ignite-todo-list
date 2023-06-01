import styles from "./EmptyList.module.css";
import clipboard from "../assets/clipboard.svg";

export function EmptyList() {
  return (
    <div className={styles.wrapper}>
      <img src={clipboard} alt="ícone de prancheta" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
