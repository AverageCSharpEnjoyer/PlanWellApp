using System.ComponentModel.DataAnnotations;

namespace Domain.MealPlan
{
    public class Ingredient
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int Calories { get; set; }
        public int Protein { get; set; }
        public int Fat { get; set; }
        public int Carbohydrates { get; set; }
        public int Weight { get; set; }
    }
}