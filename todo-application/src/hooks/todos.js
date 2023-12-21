import { useState, useEffect } from 'react';
import todoService from '../services/todoService';

function useTodos(params) {
  const [todoList, setTodos] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await todoService.getTodos();
        setTodos(response.data);
        params && params.onSuccess?.(response.data);
      } catch (error) {
        setError(error);
        params && params.onError?.(error);
      }
    };

    fetchTodos();
  }, []);

  return { todoList, error };
}

const usePostTodo = (params) => {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postTodoData = async (todoData) => {};

  return { response, loading, error, postTodoData };
};

const useDeleteTodo = (params) => {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteTodo = async (id) => {};

  return { response, loading, error, deleteTodo };
};

const useToggleTodo = (id) => {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleTodo = async (id) => {};

  return { response, loading, error, toggleTodo };
};

export { useTodos, usePostTodo, useToggleTodo, useDeleteTodo };
