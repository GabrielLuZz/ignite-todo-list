import { v4 as uuidv4 } from 'uuid';
import { ITask } from '../interfaces/task';

export const tasks: ITask[] = [
  {
    id: uuidv4(),
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, beatae sapiente praesentium ab officia minima vitae voluptates voluptate nesciunt, placeat exercitationem libero ipsam deserunt mollitia dicta! Aliquid porro accusantium iusto.',
    isCompleted: true
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, beatae sapiente praesentium ab officia minima vitae voluptates voluptate nesciunt, placeat exercitationem libero ipsam deserunt mollitia dicta! Aliquid porro accusantium iusto.',
    isCompleted: true
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, beatae sapiente praesentium ab officia minima vitae voluptates voluptate nesciunt, placeat exercitationem libero ipsam deserunt mollitia dicta! Aliquid porro accusantium iusto.',
    isCompleted: true
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, beatae sapiente praesentium ab officia minima vitae voluptates voluptate nesciunt, placeat exercitationem libero ipsam deserunt mollitia dicta! Aliquid porro accusantium iusto.',
    isCompleted: true
  },
]

