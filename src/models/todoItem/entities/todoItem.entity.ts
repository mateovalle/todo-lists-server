import { TodoList } from '@models/todoList/entities';

export class TodoItem {
  id: string;
  title: string;
  text: string;
  todoListId: string;
  todoList?: TodoList;
}
