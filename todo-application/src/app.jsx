import * as React from 'react';
import { TodoForm } from './components/todo-form';
import { TodoList } from './components/todo-list';
import { TodoResults } from './components/todo-results';
import TodoApiContextProvider from './contexts/providers/todoApiContextProvider';

import './index.scss';

export const App = () => {
  return (
    <div className="root">
      <TodoApiContextProvider>
        <TodoList />
        <TodoResults />
        <TodoForm />
      </TodoApiContextProvider>
    </div>
  );
};
