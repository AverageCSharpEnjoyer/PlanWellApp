using Application.Meals;
using Domain.MealPlan;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MealsController: BaseApiController
    {
        [HttpGet] //api/meals
        public async Task<ActionResult<IEnumerable<Meal>>> GetMeals()
        {
            return await Mediator.Send(new MealsList.Query());
        }

        [HttpGet("{id}")] //api/meals/{id}
        public async Task<ActionResult<Meal>> GetMeal(Guid id)
        {
            var meal = await Mediator.Send(new MealDetails.Query{Id = id});

            if(meal == null)
            {
                return NotFound();
            }

            return meal; 
        }

        
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateMeal(Guid id, Meal mealDTO)
        {
            mealDTO.Id = id;
            await Mediator.Send(new MealUpdate.Command {Meal = mealDTO});
            return Ok();
        }

        [HttpPost] //api/meals/{meal}
        public async Task<IActionResult> CreateMeal(Meal mealDTO)
        {
            await Mediator.Send(new MealCreate.Command {Meal = mealDTO});
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMeal(Guid id)
        {
            await Mediator.Send(new MealDelete.Command {Id = id});
            return Ok();
        }
    }
}