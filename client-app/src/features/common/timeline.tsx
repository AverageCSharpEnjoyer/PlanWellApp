import { useState } from "react";
import './timeline.css';
import { TimeRange } from "./timeRange";
import { ToDoTask } from "../../app/models/toDoTask";

interface TimelineProps {
    milestones: ToDoTask[];
    timeRange: TimeRange;
}

const Timeline: React.FC<TimelineProps> = ({ milestones, timeRange }) => {
    const [selectedMilestone, setSelectedMilestone] = useState<string | null>(null);

    const handleMilestoneClick = (id: string) => {
        setSelectedMilestone(id === selectedMilestone ? null : id);
    };

    const calculatePosition = (date: Date) => {
        const startDate = new Date('2024-01-01');
        const endDate = new Date('2024-12-31');
        const milestoneDate = new Date(date);

        const totalMilliseconds = endDate.getTime() - startDate.getTime();
        const milestoneMilliseconds = milestoneDate.getTime() - startDate.getTime();

        return (milestoneMilliseconds / totalMilliseconds) * 100;
    };

    return (
        <div className="timeline">
            {milestones.map((milestone) => (
                <div
                    key={milestone.id}
                    className={`dot ${milestone.id === selectedMilestone ? 'selected' : ''}`}
                    style={{ left: `${calculatePosition(milestone.taskDateTime)}%` }}
                    onClick={() => handleMilestoneClick(milestone.id)}
                >
                    <div className="tooltip">{milestone.title}</div>
                </div>
            ))}
            <div className="line" />
        </div>
    );
};

export default Timeline;