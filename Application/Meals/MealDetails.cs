using Domain.MealPlan;
using MediatR;
using Persistence;

namespace Application.Meals
{
    public class MealDetails
    {
        public class Query : IRequest<Meal>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Meal>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Meal> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Meals.FindAsync(request.Id);
            }
        }
    }
}