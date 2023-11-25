using System.ComponentModel.DataAnnotations;

namespace Domain.MealPlan
{
    public class Step
    {
        [Key]
        public Guid Id { get; set; }
        public int Counter {get; set; }
        public string Description { get; set; }
    }
}