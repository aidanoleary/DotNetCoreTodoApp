using System;
using System.Collections.Generic;
using TodoApplication.Models;

namespace TodoApplication.Services
{
  public interface ITodoQueryService
  {
    IEnumerable<Todo> GetAllTodos();
    IEnumerable<Todo> GetTodosForUser(int userId);
    Todo GetTodo(int todoId);
  }
}