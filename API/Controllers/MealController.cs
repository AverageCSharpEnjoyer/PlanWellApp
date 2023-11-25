using Domain.MealPlan;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MealController: ControllerBase
    {
        private readonly DataContext _context;
        public MealController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Meal>>> GetMeals()
        {
            return await _context.Meals.Select(x=> x).ToListAsync(); 
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Meal>> GetMeal(Guid id)
        {
            var meal = await _context.Meals.FindAsync(id);

            if(meal == null)
            {
                return NotFound();
            }

            return meal; 
        }

        
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateMeal(Guid id, Meal mealDTO)
        {
            if(id != mealDTO.Id)
            {
                return BadRequest();
            }

            var meal = await _context.Meals.FindAsync(id);
            if(meal == null){
                return NotFound();
            } 

            meal.Name = mealDTO.Name;
            meal.Description = mealDTO.Description;
            meal.Calories = mealDTO.Calories;
            meal.Carbohydrates = mealDTO.Carbohydrates;
            meal.Fat = mealDTO.Fat;
            meal.Protein = mealDTO.Protein;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException) when (!MealItemExists(id))
            {
                return NotFound();
            }

            return NoContent(); 
        }

        [HttpPost]
        public async Task<ActionResult> CreateMeal(Meal mealDTO)
        {
            var meal = new Meal
            {
                Name = mealDTO.Name,
                Calories = mealDTO.Calories,
                Carbohydrates = mealDTO.Carbohydrates,
                Protein = mealDTO.Protein,
                Fat = mealDTO.Fat,
                Description = mealDTO.Description
            };

            _context.Meals.Add(meal);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetMeal),
                new {id = meal.Id},
                meal
            );
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMeal(Guid id)
        {
            var meal = await _context.Meals.FindAsync(id);
            if(meal == null)
            {
                return NotFound();
            }

            _context.Meals.Remove(meal);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MealItemExists(Guid id)
        {
            return _context.Meals.Any(i => i.Id == id);
        }
    }
}