import { TodoList } from '@models/todoList/entities';

export class User {
  id: string;
  username: string;
  password: string;
  todoLists?: TodoList[];
}
