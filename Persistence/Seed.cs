using Domain.MealPlan;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (!context.Meals.Any()) {
                var meals = new List<Meal>
                {
                    new Meal
                    {
                        Name = "Past Meal 1",
                        Description = "Desc",
                        Calories = 250,
                        Protein = 29,
                        Fat = 7,
                        Carbohydrates = 50
                    },
                    new Meal
                    {
                        Name = "Past Meal 2",
                        Description = "Desc",
                        Calories = 250,
                        Protein = 29,
                        Fat = 7,
                        Carbohydrates = 50
                    },
                    new Meal
                    {
                        Name = "Past Meal 3",
                        Description = "Desc",
                        Calories = 250,
                        Protein = 29,
                        Fat = 7,
                        Carbohydrates = 50
                    },
                    new Meal
                    {
                        Name = "Past Meal 4",
                        Description = "Desc",
                        Calories = 250,
                        Protein = 29,
                        Fat = 7,
                        Carbohydrates = 50
                    },
                    new Meal
                    {
                        Name = "Past Meal 5",
                        Description = "Desc",
                        Calories = 250,
                        Protein = 29,
                        Fat = 7,
                        Carbohydrates = 50
                    },
                    new Meal
                    {
                        Name = "Past Meal 6",
                        Description = "Desc",
                        Calories = 250,
                        Protein = 29,
                        Fat = 7,
                        Carbohydrates = 50
                    },
                    new Meal
                    {
                        Name = "Past Meal 7",
                        Description = "Desc",
                        Calories = 250,
                        Protein = 29,
                        Fat = 7,
                        Carbohydrates = 50
                    },
                    new Meal
                    {
                        Name = "Past Meal 8",
                        Description = "Desc",
                        Calories = 250,
                        Protein = 29,
                        Fat = 7,
                        Carbohydrates = 50
                    },
                    new Meal
                    {
                        Name = "Past Meal 9",
                        Description = "Desc",
                        Calories = 250,
                        Protein = 29,
                        Fat = 7,
                        Carbohydrates = 50
                    },
                    new Meal
                    {
                        Name = "Past Meal 10",
                        Description = "Desc",
                        Calories = 250,
                        Protein = 29,
                        Fat = 7,
                        Carbohydrates = 50
                    }
                };

                await context.Meals.AddRangeAsync(meals);
                await context.SaveChangesAsync();
            }
            
            if (!context.Ingredients.Any()) {
                var ingredients = new List<Ingredient>{
                    new Ingredient{
                        Name = "Apple",
                        Calories = 40,
                        Carbohydrates = 30,
                        Fat = 0,
                        Protein = 3,
                        Weight = 80
                    },
                    new Ingredient{
                        Name = "Banana",
                        Calories = 40,
                        Carbohydrates = 60,
                        Fat = 0,
                        Protein = 3,
                        Weight = 120
                    },
                    new Ingredient{
                        Name = "Mango",
                        Calories = 40,
                        Carbohydrates = 30,
                        Fat = 0,
                        Protein = 3,
                        Weight = 80
                    }
                };
                await context.Ingredients.AddRangeAsync(ingredients);
                await context.SaveChangesAsync();
            }
            
            if (!context.Steps.Any()) {
                var steps = new List<Step>{
                    new Step{
                        Description = "1 step"
                    },
                    new Step{
                        Description = "2 step"
                    },
                    new Step{
                        Description = "3 step"
                    }
                };
                await context.Steps.AddRangeAsync(steps);
                await context.SaveChangesAsync();
            }

            if (!context.ToDoTasks.Any()) {
                var toDoTasks = new List<ToDoTask>{
                    new ToDoTask{
                        Title = "Task 1",
                        Details = "What to do",
                        TaskDateTime = new DateTime(2024, 2, 12, 3,15,22)
                    },
                    new ToDoTask{
                        Title = "Task 2",
                        Details = "What to do",
                        TaskDateTime = new DateTime(2024, 6, 20, 3,15,22)
                    },
                    new ToDoTask{
                        Title = "Task 3",
                        Details = "What to do",
                        TaskDateTime = new DateTime(2024, 11, 12, 3,15,22)
                    }
                };
                await context.ToDoTasks.AddRangeAsync(toDoTasks);
                await context.SaveChangesAsync();
            }

            return;
        }
    }
}