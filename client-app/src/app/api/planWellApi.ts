import axios from "axios";
import { Meal } from "../models/meal";
import { ToDoTask } from "../models/toDoTask";

export async function getMeals(){
    const response = await axios.get<Meal[]>('http://localhost:5000/api/Meals');
    return response.data;
}

export async function getToDoTasks(){
    const response = await axios.get<ToDoTask[]>('http://localhost:5000/api/ToDoTasks');
    return response.data;
}

export async function getToDoTasksInDateRange(dateFrom: Date, dateTo: Date){
    const response = await axios.get<ToDoTask[]>('http://localhost:5000/api/ToDoTasks', {
        params: {
            dateFrom: dateFrom,
            dateTo: dateTo
        }
    });
    return response.data;
}