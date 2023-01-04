import { User } from '@models/user/entities';
import { TodoItem } from '@models/todoItem/entities';

export class TodoList {
  id: string;
  title: string;
  items: TodoItem[];
  userId: string;
  user?: User;
}
