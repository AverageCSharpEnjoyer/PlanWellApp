using Domain.MealPlan;
using MediatR;
using Persistence;

namespace Application.Ingredients
{
    public class IngredientCreate
    {
        public class Command : IRequest
        {
            public Ingredient Ingredient {get; set;}
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
                _context.Ingredients.Add(request.Ingredient);
                throw new NotImplementedException();
            }
        }
    }
}