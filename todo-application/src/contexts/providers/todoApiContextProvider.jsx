import { React, useReducer, useCallback } from 'react';
import TodoApiContext from '../todoApiContext';

function TodoApiContextProvider({ children }) {
  // eslint-disable-next-line no-use-before-define
  const [{ todos }, dispatch] = useReducer(reducer, {
    todos: [],
  });

  const setTodos = useCallback(async (todosData) => {
    dispatch({ type: 'TODO_List', data: todosData });
  }, []);

  const deleteTodo = useCallback(async (id) => {
    // delete todo
  }, []);

  const toggleTodo = useCallback(async (id) => {}, []);

  const todosContextValues = {
    todos,
    setTodos,
    toggleTodo,
  };

  return (
    <TodoApiContext.Provider value={todosContextValues}>
      {children}
    </TodoApiContext.Provider>
  );
}

export default TodoApiContextProvider;

const reducer = (state, action) => {
  switch (action.type) {
    case 'TODO_List':
      return {
        ...state,
        todos: action.data,
      };

    default:
      return state;
  }
};
