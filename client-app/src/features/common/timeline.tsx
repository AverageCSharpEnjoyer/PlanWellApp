import { ChangeEvent, useEffect, useState } from "react";
import './timeline.css';
import { ToDoTask } from "../../app/models/toDoTask";
import { TimeRange, Years } from "./timeRange";
import { getToDoTasks } from "../../app/api/planWellApi";

const Timeline: React.FC = () => {

    const [timelineTasks, setTimelineTasks] = useState<ToDoTask[]>([]);
    const [selectedMilestone, setSelectedMilestone] = useState<string | null>(null);
    const [timeRange, setTimeRange] = useState<TimeRange>(TimeRange.FY);
    const [year, setYear] = useState<string>(Years[0]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await getToDoTasks();
                setTimelineTasks(responseData);
            } catch (error) {
                console.error('Tasks for timeline could not be loaded: ', error);
            }
        };

        fetchData();
    }, []);

    const handleMilestoneClick = (id: string) => {
        setSelectedMilestone(id === selectedMilestone ? null : id);
    };

    const handleTimeRangeChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setTimeRange(value as TimeRange);
        renderTimelineTasks(value as TimeRange, year);
    }

    const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setYear(value);
        renderTimelineTasks(timeRange, value);
    }

    const calculatePosition = (date: Date, timeRange: TimeRange, year: string) => {
        const [startDate, endDate] = calculateDateRanges(timeRange, year);
        console.log(`Start Date: ${startDate}`);
        console.log(`End Date: ${endDate}`);
        const milestoneDate = new Date(date);

        const totalMilliseconds = endDate.getTime() - startDate.getTime();
        const milestoneMilliseconds = milestoneDate.getTime() - startDate.getTime();

        return (milestoneMilliseconds / totalMilliseconds) * 100;
    };

    function calculateDateRanges(timeRange: TimeRange, year: string): [Date, Date] {
        switch (timeRange) {
            case TimeRange.FY:
                return [new Date(`${year}-01-01`), new Date(`${year}-12-31`)];
            case TimeRange.H1:
                return [new Date(`${year}-01-01`), new Date(`${year}-06-30`)];
            case TimeRange.H2:
                return [new Date(`${year}-07-01`), new Date(`${year}-12-31`)];
            case TimeRange.Q1:
                return [new Date(`${year}-01-01`), new Date(`${year}-03-31`)];
            case TimeRange.Q2:
                return [new Date(`${year}-04-01`), new Date(`${year}-06-30`)];
            case TimeRange.Q3:
                return [new Date(`${year}-07-01`), new Date(`${year}-09-30`)];
            case TimeRange.Q4:
                return [new Date(`${year}-10-01`), new Date(`${year}-12-31`)];
        }
    }

    const renderTimelineTasks = (dateRangeType: TimeRange, year: string) => {
        return timelineTasks.map((timelineTask) => (
            <div
                key={timelineTask.id}
                className={`dot ${timelineTask.id === selectedMilestone ? 'selected' : ''}`}
                style={{ left: `${calculatePosition(timelineTask.taskDateTime, dateRangeType, year)}%` }}
                onClick={() => handleMilestoneClick(timelineTask.id)}
            >
                <div className="tooltip">{timelineTask.title}</div>
            </div>
        ));
    };

    return (
        <>
            <div>
                <select value={timeRange} onChange={handleTimeRangeChange} id="timeRange">
                    {(Object.keys(TimeRange) as Array<keyof typeof TimeRange>).map(key => (
                        <option key={key} value={key}>
                            {key}
                        </option>
                    ))}
                </select>
                <select value={year} onChange={handleYearChange} id="year">
                    {Years.map(key => (
                        <option key={key} value={key}>
                            {key}
                        </option>
                    ))}
                </select>
            </div>
            <div className="timeline">
                {renderTimelineTasks(timeRange, year)}
                <div className="line" />
            </div>
        </>
    );
};

export default Timeline;