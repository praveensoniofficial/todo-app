import * as React from 'react';
import TodosApiContext from '../../contexts/todoApiContext';
import './todo-results.scss';

export const TodoResults = () => {
  const calculateChecked = () => {};

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
