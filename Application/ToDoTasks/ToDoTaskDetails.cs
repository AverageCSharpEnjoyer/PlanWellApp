using Domain.MealPlan;
using MediatR;
using Persistence;

namespace Application.ToDoTasks
{
    public class ToDoTaskDetails
    {
        public class Query : IRequest<ToDoTask>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, ToDoTask>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<ToDoTask> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.ToDoTasks.FindAsync(request.Id);
            }
        }
    }
}