using Domain.MealPlan;
using MediatR;
using Persistence;

namespace Application.Meals
{
    public class MealDelete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
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
                var meal = await _context.Meals.FindAsync(request.Id);
                _context.Meals.Remove(meal);
                await _context.SaveChangesAsync();
            }
        }
    }
}