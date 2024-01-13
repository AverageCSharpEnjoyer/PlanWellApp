using Domain.MealPlan;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ToDoTasksController : ControllerBase
    {
        private readonly DataContext _context;
        public ToDoTasksController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ToDoTask>>> GetToDoTasks()
        {
            return await _context.ToDoTasks.Select(x=> x).ToListAsync();
        }
    }
}