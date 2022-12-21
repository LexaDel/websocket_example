import { Component } from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
        path: "/admin",
        element: <AdminPage />,
    },
    {
        path: "/doctor",
        element: <div> Hello Doctor </div>,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    }
]);
export class App extends Component {
    render() {
        return (
            <RouterProvider router={router} />
        )
    }
}