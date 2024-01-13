using Domain.MealPlan;
using MediatR;
using Persistence;

namespace Application.ToDoTasks
{
    public class ToDoTaskCreate
    {
        public class Command :IRequest
        {
            public ToDoTask ToDoTask {get; set;}    
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
                _context.ToDoTasks.Add(request.ToDoTask);
                await _context.SaveChangesAsync();
            }
        }
    }
}