import * as React from 'react';
import { Checkbox } from '../checkbox';
import todoApiContext from '../../contexts/todoApiContext';
import { useTodos, useDeleteTodo } from '../../hooks/todos';
import './todo-list.scss';

export const TodoList = () => {
  const { todos, setTodos } = React.useContext(todoApiContext);
  const { todoList, error } = useTodos();

  const handleDelete = async (id) => {
    // handle delete todo
  };

  const toggleCheck = async (id) => {
    // Write the code to toggle the check here
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Todo List:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      )}
    </div>
  );
};
