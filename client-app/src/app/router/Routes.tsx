import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />
    },
]

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    }
]);
