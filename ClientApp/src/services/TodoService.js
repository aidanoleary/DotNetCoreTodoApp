export default class TodoService {
  constructor() {
    this.apiUrl = "/api";
  }

  getAllTodos = () => {
    return fetch(`${this.apiUrl}/todos`)
      .then(response => response.json());
  }

  getTodo = (todoId) => {
    return fetch(`${this.apiUrl}/todos/${todoId}`)
      .then(response => response.json());
  }

  addTodo = (todo) => {
    return fetch(`${this.apiUrl}/todos/`, {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json());
  }

  deleteTodo = (todoId) => {
    return fetch(`${this.apiUrl}/todos/${todoId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}