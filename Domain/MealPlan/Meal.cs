using System.ComponentModel.DataAnnotations;

namespace Domain.MealPlan;

public class Meal
{
    [Key]
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int Calories { get; set; }
    public int Protein { get; set; }
    public int Fat { get; set; }
    public int Carbohydrates { get; set; }
    public ICollection<Step> Steps {get; set;}
    public ICollection<Ingredient> Ingredients { get; set; }
}
