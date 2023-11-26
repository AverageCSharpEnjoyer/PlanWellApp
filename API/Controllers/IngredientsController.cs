using Domain.MealPlan;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IngredientsController : ControllerBase
    {
        private readonly DataContext _context;
        public IngredientsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ingredient>>> GetIngredients()
        {

            return await _context.Ingredients.Select(x=> x).ToListAsync(); 
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Ingredient>> GetIngredient(Guid id)
        {
            var ingredient = await _context.Ingredients.FindAsync(id);

            if(ingredient == null)
            {
                return NotFound();
            }

            return ingredient; 
        }

        
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateIngredient(Guid id, Ingredient ingredientDTO)
        {
            if(id != ingredientDTO.Id)
            {
                return BadRequest();
            }

            var ingredient = await _context.Ingredients.FindAsync(id);
            if(ingredient == null){
                return NotFound();
            } 

            ingredient.Name = ingredientDTO.Name;
            ingredient.Protein = ingredientDTO.Protein;
            ingredient.Carbohydrates = ingredientDTO.Carbohydrates;
            ingredient.Weight = ingredientDTO.Weight;
            ingredient.Fat = ingredientDTO.Fat;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException) when (!IngredientItemExists(id))
            {
                return NotFound();
            }

            return NoContent(); 
        }

        [HttpPost]
        public async Task<ActionResult> CreateIngredient(Ingredient ingredientDTO)
        {
            var ingredient = new Ingredient
            {
                Name = ingredientDTO.Name,
                Calories = ingredientDTO.Calories,
                Carbohydrates = ingredientDTO.Carbohydrates,
                Protein = ingredientDTO.Protein,
                Fat = ingredientDTO.Fat,
                Weight = ingredientDTO.Weight
            };

            _context.Ingredients.Add(ingredient);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetIngredient),
                new {id = ingredient.Id},
                ingredient
            );
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteIngredient(Guid id)
        {
            var ingredient = await _context.Ingredients.FindAsync(id);
            if(ingredient == null)
            {
                return NotFound();
            }

            _context.Ingredients.Remove(ingredient);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool IngredientItemExists(Guid id)
        {
            return _context.Ingredients.Any(i => i.Id == id);
        }
    }
}