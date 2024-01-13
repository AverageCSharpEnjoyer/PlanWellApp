using AutoMapper;
using Domain.MealPlan;
using MediatR;
using Persistence;

namespace Application.ToDoTasks
{
    public class ToDoTaskUpdate
    {
        public class Command : IRequest
        {
            public ToDoTask ToDoTask { get; set; }
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
                var toDoTask = await _context.ToDoTasks.FindAsync(request.ToDoTask.Id);
                
                _mapper.Map(request.ToDoTask, toDoTask);

                await _context.SaveChangesAsync();
            }
        }
    }
}