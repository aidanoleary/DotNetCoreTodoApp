using System;
using System.Collections.Generic;
using TodoApplication.Models;

namespace TodoApplication.Services
{
  public class InMemoryTodoService : ITodoService
  {
    private List<Todo> todos;
    private Random randomIdGenerator;

    public InMemoryTodoService()
    {
      randomIdGenerator = new Random();

      todos = new List<Todo>();
      todos.Add(new Todo()
      {
        Id = randomIdGenerator.Next(1000000),
        Title = "First Todo",
        IsComplete = false
      });
    }

    public IEnumerable<Todo> GetAllTodos()
    {
      return todos;
    }

    public Todo GetTodo(int todoId)
    {
      return todos.Find(t => t.Id == todoId);
    }

    public IEnumerable<Todo> GetTodosForUser(int userId)
    {
      return todos.FindAll(t => t.OwnerId == userId);
    }
    public int AddTodo(Todo todoToAdd)
    {
      int id = randomIdGenerator.Next(1000000);
      while (todos.Find(t => t.Id == id) != null)
      {
        id = randomIdGenerator.Next(1000000);
      }

      todoToAdd.Id = id;
      todos.Add(todoToAdd);
      return id;
    }

    public void RemoveTodo(int todoId)
    {
      todos.RemoveAll(t => t.Id == todoId);
    }

    public void UpdateTodo(Todo updatedTodo)
    {
      int oldTodoIndex = todos.FindIndex(t => t.Id == updatedTodo.Id);
      todos[oldTodoIndex] = updatedTodo;
    }

    public void DeleteTodo(int todoId)
    {
      todos.RemoveAll(t => t.Id == todoId);
    }
  }
}