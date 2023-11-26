using Domain.MealPlan;
using MediatR;
using Persistence;

namespace Application.Meals
{
    public class MealCreate
    {
        public class Command :IRequest
        {
            public Meal Meal {get; set;}    
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Meals.Add(request.Meal);
                await _context.SaveChangesAsync();
            }
        }
    }
}