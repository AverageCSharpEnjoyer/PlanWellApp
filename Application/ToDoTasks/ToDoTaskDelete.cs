using Domain.MealPlan;
using MediatR;
using Persistence;

namespace Application.ToDoTasks
{
    public class ToDoTaskDelete
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
                var toDoTask = await _context.ToDoTasks.FindAsync(request.Id);
                _context.ToDoTasks.Remove(toDoTask);
                await _context.SaveChangesAsync();
            }
        }
    }
}