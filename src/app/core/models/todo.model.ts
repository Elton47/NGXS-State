export class Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export class TodoRequest {
  title: string;
  description?: string;
  completed = false;
}