import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import {Fitness} from "../../features/fitness_feature/mainpage-fitness";
import {Money} from "../../features/money_feature/mainpage-money";
import {PersonalProjects} from "../../features/projects_feature/mainpage-projects";
import {ToDoTasks} from "../../features/tasks_feature/mainpage-tasks";
import { Summary } from "../../features/summary-page";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: 'fitness', element: <Fitness />},
            {path: 'finance', element: <Money />},
            {path: 'personalprojects', element: <PersonalProjects />},
            {path: 'todotasks', element: <ToDoTasks />},
            {path: 'summary', element: <Summary />},
        ]
    },
]

export const router = createBrowserRouter(routes);
