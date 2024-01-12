import { TimeRange } from "../common/timeRange";
import Timeline from "../common/timeline";



const Tasks: React.FC = () => {

    const milestones = [
        { id: 1, date: '2024-05-11', description: 'First milestone' },
        { id: 2, date: '2024-12-01', description: 'Second milestone' },
        // Add more milestones as needed
    ];

    return (
        <>
            <Timeline milestones={milestones} timeRange={TimeRange.FY} />
        </>
    )
}

export default Tasks;