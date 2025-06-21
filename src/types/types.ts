// 1. Define Todo type
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// 2. Define state type
export interface TodosState {
  todos: Todo[];
  isLoading: boolean;
  error: string | null;
}

