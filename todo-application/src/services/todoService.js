import axios from 'axios';

class todoService {
  static async getTodos() {
    return await axios.get('http://localhost:4000/todos');
  }

  static async insertTodo(todoData) {
    
  }

  static async toggleTodo(id) {
    
  }

  static async deleteTodo(id) {
  }
}

export default todoService;
