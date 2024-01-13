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

        [HttpGet] //api/toDoTasks
        public async Task<ActionResult<IEnumerable<ToDoTask>>> GetToDoTasks()
        {
            return await _context.ToDoTasks.Select(x=> x).ToListAsync();
        }

        [HttpGet("{id}")] //api/toDoTasks/{id}
        public async Task<ActionResult<ToDoTask>> GetToDoTask(Guid id)
        {
            var toDoTask = await _context.ToDoTasks.FindAsync(id);

            if(toDoTask == null)
            {
                return NotFound();
            }

            return toDoTask; 
        }

        [HttpPost] //api/toDoTasks/{toDoTask}
        public async Task<ActionResult> CreateToDoTask(ToDoTask toDoTaskDTO)
        {
            var toDoTask = new ToDoTask {
                Title = toDoTaskDTO.Title,
                Details = toDoTaskDTO.Details,
                TaskDateTime = toDoTaskDTO.TaskDateTime
            };

            _context.ToDoTasks.Add(toDoTask);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetToDoTask),
                new {id = toDoTask.Id},
                toDoTask
            );
        }
    }
}