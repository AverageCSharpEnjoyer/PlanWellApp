using Domain.MealPlan;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Persistence
{
    public class DataContext : DbContext
    {
        protected readonly IConfiguration _configuration;
        public DataContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(_configuration.GetConnectionString("PlanWellDatabase"));
        }
        public DbSet<Meal> Meals {get; set;}
        public DbSet<Ingredient> Ingredients {get; set;}
        public DbSet<Step> Steps {get; set;}
    }
}