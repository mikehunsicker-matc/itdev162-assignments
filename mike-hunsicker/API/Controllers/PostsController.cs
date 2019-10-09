using System.Collections.Generic;
using System.Linq;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence;

namespace API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class PostsController : ControllerBase
  {
    private readonly DataContext context;

    public PostsController(DataContext context)
    {
      this.context = context;
    }

    // GET api/posts
    [HttpGet]
    public ActionResult<List<Post>> Get()
    {
      return this.context.Posts.ToList();
    }
  }
}
