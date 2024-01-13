import { TimeRange } from "../common/timeRange";
import Timeline from "../common/timeline";
import { ToDoTask } from "../../app/models/toDoTask";
import { useEffect, useState } from "react";
import { getToDoTasks } from "../../app/api/planWellApi";

const Tasks: React.FC = () => {

    const [toDoTasks, setToDoTasks] = useState<ToDoTask[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const responseData = await getToDoTasks();
                setToDoTasks(responseData);
            } catch (error) {
                console.error('Tasks could not be loaded: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Timeline milestones={toDoTasks} timeRange={TimeRange.FY} />
        </>
    )
}

export default Tasks;