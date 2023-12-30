import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import { Summary } from "../../features/summary-page";
import { PathConstants } from "../common/PathConstants";
import { Health } from "../../features/health/health-dashboard";
import { Finance } from "../../features/finance/finance-dashboard";
import { Projects } from "../../features/projects/projects-dashboard";
import { Tasks } from "../../features/tasks/tasks-dashboard";

export const routes: RouteObject[] = [
    {
        path: PathConstants.DASHBOARD,
        element: <App />,
        children: [
            {path: PathConstants.HEALTH, element: <Health />},
            {path: PathConstants.FINANCE, element: <Finance />},
            {path: PathConstants.PROJECTS, element: <Projects />},
            {path: PathConstants.TASKS, element: <Tasks />},
            {path: PathConstants.SUMMARY, element: <Summary />},
        ]
    },
]

export const router = createBrowserRouter(routes);
