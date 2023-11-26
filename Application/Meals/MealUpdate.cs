using AutoMapper;
using Domain.MealPlan;
using MediatR;
using Persistence;

namespace Application.Meals
{
    public class MealUpdate
    {
        public class Command : IRequest
        {
            public Meal Meal { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var meal = await _context.Meals.FindAsync(request.Meal.Id);
                
                _mapper.Map(request.Meal, meal);

                await _context.SaveChangesAsync();
            }
        }
    }
}