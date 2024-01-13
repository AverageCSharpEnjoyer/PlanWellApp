import { ChangeEvent, useState } from "react";
import './timeline.css';
import { ToDoTask } from "../../app/models/toDoTask";
import { TimeRange } from "./timeRange";

interface TimelineProps {
    milestones: ToDoTask[];
}

const Timeline: React.FC<TimelineProps> = ({ milestones }) => {
    const [selectedMilestone, setSelectedMilestone] = useState<string | null>(null);
    const [timeRange, setTimeRange] = useState<TimeRange>(TimeRange.H1);

    const handleMilestoneClick = (id: string) => {
        setSelectedMilestone(id === selectedMilestone ? null : id);
    };

    const handleTimeRangeChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const {value} = event.target;
        setTimeRange(value as TimeRange);
    }

    const calculatePosition = (date: Date) => {
        const startDate = new Date('2024-01-01');
        const endDate = new Date('2024-12-31');
        const milestoneDate = new Date(date);

        const totalMilliseconds = endDate.getTime() - startDate.getTime();
        const milestoneMilliseconds = milestoneDate.getTime() - startDate.getTime();

        return (milestoneMilliseconds / totalMilliseconds) * 100;
    };

    return (
        <>
            <div>
                <select value={timeRange} onChange={handleTimeRangeChange} id="timeRange">
                    {(Object.keys(TimeRange) as Array<keyof typeof TimeRange>).map(key => (
                        <option key = {key} value={key}>
                            {key}
                        </option>
                    ))}
                </select>
            </div>
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
        </>
    );
};

export default Timeline;