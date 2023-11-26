using Domain.MealPlan;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Meals
{
    public class MealsList
    {
        public class Query : IRequest<List<Meal>> {}

        public class Handler : IRequestHandler<Query, List<Meal>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Meal>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Meals.ToListAsync();
            }
        }
    }
}