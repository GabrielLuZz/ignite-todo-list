import { v4 as uuidv4 } from 'uuid';
import { ITask } from '../interfaces/task';

export const tasks: ITask[] = [
  {
    id: uuidv4(),
    title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: true
  },
  {
    id: uuidv4(),
    title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: true
  },
  {
    id: uuidv4(),
    title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: true
  },
  {
    id: uuidv4(),
    title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: true
  },
]

