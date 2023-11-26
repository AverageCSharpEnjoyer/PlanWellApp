using AutoMapper;
using Domain.MealPlan;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Meal, Meal>();
            CreateMap<Ingredient, Ingredient>();
            CreateMap<Step, Step>();
        }
    }
}