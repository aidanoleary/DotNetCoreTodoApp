using System;

namespace TodoApplication.Models
{
  public class Todo
  {
    public int Id { get; set; }
    public int OwnerId { get; set; }
    public string Title { get; set; }
    public bool IsComplete { get; set; }
  }
}
