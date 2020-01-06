using System;
using TodoApplication.Models;

namespace TodoApplication.Services
{
  public interface ITodoCommandService
  {
    int AddTodo(Todo todoToAdd);
    void RemoveTodo(int todoId);
    void UpdateTodo(Todo updatedTodo);

    void DeleteTodo(int todoId);
  }
}