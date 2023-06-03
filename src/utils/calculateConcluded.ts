import { ITask } from "../interfaces/task";

export function calculateConcluded(tasks: ITask[]) {
  const concludedOnes = tasks.reduce((accumulator, current) => {
    if(current.isCompleted === true) {
      return accumulator + 1 
    }

    return accumulator
  }, 0)

  return concludedOnes
}