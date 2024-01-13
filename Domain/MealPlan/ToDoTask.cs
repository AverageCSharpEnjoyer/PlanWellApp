using System.ComponentModel.DataAnnotations;

namespace Domain.MealPlan
{
    public class ToDoTask
    {
        [Key]
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Details { get; set; }
        public DateTime TaskDateTime { get; set; }
    }
}