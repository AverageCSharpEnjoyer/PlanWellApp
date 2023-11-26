using Domain.MealPlan;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StepsController: ControllerBase
    {
        private readonly DataContext _context;
        public StepsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Step>>> GetSteps()
        {
            return await _context.Steps.Select(x=> x).ToListAsync(); 
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Step>> GetStep(Guid id)
        {
            var step = await _context.Steps.FindAsync(id);

            if(step == null)
            {
                return NotFound();
            }

            return step; 
        }

        
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateStep(Guid id, Step stepDTO)
        {
            if(id != stepDTO.Id)
            {
                return BadRequest();
            }

            var step = await _context.Steps.FindAsync(id);
            if(step == null){
                return NotFound();
            } 

            step.Counter = stepDTO.Counter;
            step.Description = stepDTO.Description;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException) when (!StepItemExists(id))
            {
                return NotFound();
            }

            return NoContent(); 
        }

        [HttpPost]
        public async Task<ActionResult> CreateStep(Step stepDTO)
        {
            var step = new Step
            {
                Counter = stepDTO.Counter,
                Description = stepDTO.Description
            };

            _context.Steps.Add(step);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetStep),
                new {id = step.Id},
                step
            );
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStep(Guid id)
        {
            var step = await _context.Steps.FindAsync(id);
            if(step == null)
            {
                return NotFound();
            }

            _context.Steps.Remove(step);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StepItemExists(Guid id)
        {
            return _context.Steps.Any(i => i.Id == id);
        }
    }
}