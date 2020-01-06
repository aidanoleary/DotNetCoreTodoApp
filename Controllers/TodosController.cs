using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TodoApplication.Models;
using TodoApplication.Services;

namespace TodoApplication.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class TodosController : ControllerBase
  {
    private readonly ILogger<TodosController> _logger;
    private readonly ITodoService _todoService;

    public TodosController(ILogger<TodosController> logger, ITodoService todoService)
    {
      _logger = logger;
      _todoService = todoService;
    }

    [HttpGet]
    public IEnumerable<Todo> GetAllTodos()
    {
      return _todoService.GetAllTodos();
    }

    [HttpGet("{id}")]
    public Todo GetTodo(int id)
    {
      return _todoService.GetTodo(id);
    }

    [HttpPost]
    public Todo AddTodo([FromBody] Todo todo)
    {
      int id = _todoService.AddTodo(todo);
      todo.Id = id;
      return todo;
    }

    [HttpPut("{id}")]
    public IActionResult PutTodo(int id, Todo todo)
    {
      _todoService.UpdateTodo(todo);
      return Ok(todo);
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteTodo(int id)
    {
      try
      {
        _todoService.DeleteTodo(id);
        return Ok();
      }
      catch (Exception ex)
      {
        return BadRequest();
      }
    }

    // ========================== TODO continue here, add the other end points
  }
}
