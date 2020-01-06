using System;
using System.Collections.Generic;
using TodoApplication.Models;

namespace TodoApplication.Services
{
  public interface ITodoService : ITodoQueryService, ITodoCommandService
  {

  }
}