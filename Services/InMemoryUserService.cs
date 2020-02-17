using System;
using TodoApplication.Models;

namespace TodoApplication.Services
{
  public class InMemoryUserService : IUserService
  {

    private User stubbedUser;
    private string stubbedPassword;

    public InMemoryUserService()
    {
      Random rand = new Random();
      int id = rand.Next(10000);
      string username = "user@example.com";
      string fakedToken = "blahblahblahtokentokentoken";

      stubbedPassword = "password";
      stubbedUser = new User()
      {
        Id = id,
        Username = username,
        Token = fakedToken
      };
    }

    public User Login(string username, string password)
    {
      throw new NotImplementedException();
    }

    public User Signup(string username, string password)
    {
      throw new NotImplementedException();
    }
  }

}