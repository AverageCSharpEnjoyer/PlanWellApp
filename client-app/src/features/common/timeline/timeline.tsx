import { ChangeEvent, useEffect, useState } from "react";
import './timeline.css';
import { ToDoTask } from "../../../app/models/toDoTask";
import { TimeRange, Years } from "../constants";
import { getToDoTasksInDateRange } from "../../../app/api/planWellApi";
import { calculateDateRanges, calculatePosition } from "./timelineHelpers";

const Timeline: React.FC = () => {

    const [timelineTasks, setTimelineTasks] = useState<ToDoTask[]>([]);
    const [selectedMilestone, setSelectedMilestone] = useState<string | null>(null);
    const [timeRange, setTimeRange] = useState<TimeRange>(TimeRange.FY);
    const [year, setYear] = useState<string>(Years[0]);
    const [dateFrom, setDateFrom] = useState<Date>(new Date(`${year}-01-01`));
    const [dateTo, setDateTo] = useState<Date>(new Date(`${year}-12-31`));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await getToDoTasksInDateRange(dateFrom, dateTo);
                setTimelineTasks(responseData);
            } catch (error) {
                console.error('Tasks for timeline could not be loaded: ', error);
            }
        };

        fetchData();
    }, [dateFrom, dateTo]);

    const handleMilestoneClick = (id: string) => {
        setSelectedMilestone(id === selectedMilestone ? null : id);
    };

    const handleTimeRangeChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setTimeRange(value as TimeRange);

        const [start, end] = calculateDateRanges(timeRange, year);
        setDateFrom(start);
        setDateTo(end);

        renderTimelineTasks(value as TimeRange, year);
    }

    const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setYear(value);

        const [start, end] = calculateDateRanges(timeRange, year);
        setDateFrom(start);
        setDateTo(end);

        renderTimelineTasks(timeRange, value);
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
            <div className="timeline">
                {renderTimelineTasks(timeRange, year)}
                <div className="line" />
            </div>
            <div style={{right: 0, position: "absolute"}}>
                <select value={timeRange} onChange={handleTimeRangeChange} id="timeRange" className="minimal-select">
                    {(Object.keys(TimeRange) as Array<keyof typeof TimeRange>).map(key => (
                        <option key={key} value={key}>
                            {key}
                        </option>
                    ))}
                </select>
                <select value={year} onChange={handleYearChange} id="year" className="minimal-select">
                    {Years.map(key => (
                        <option key={key} value={key}>
                            {key}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default Timeline;