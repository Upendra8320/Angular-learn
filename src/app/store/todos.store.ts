import { Todo } from '../model/todo.model';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { TodosService } from '../services/todos.service';
import { inject } from '@angular/core';

export type TodosFilter = 'all' | 'pending' | 'completed';

type TodosState = {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  filter: TodosFilter;
};

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: null,
  filter: 'all',
};

export const TodosStore = signalStore(
  { providedIn: 'root' },
  withState<TodosState>(initialState),
  withMethods((store, todosService = inject(TodosService)) => ({
    async loadAll() {
      patchState(store, { loading: true });
      try {
        const todos: Todo[] = await todosService.getTodos();
        console.log('todos: ', todos);
        patchState(store, { todos, loading: false });
      } catch (error:any) {
        patchState(store, { error, loading: false });
      }

    },
  }))
);
