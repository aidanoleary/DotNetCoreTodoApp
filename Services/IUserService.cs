using TodoApplication.Models;

namespace TodoApplication.Services
{
  public interface IUserService
  {
    public User Login(string username, string password);
    public User Signup(string username, string password);
  }
}
