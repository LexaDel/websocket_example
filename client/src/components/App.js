import { Component } from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import AdminPage from "../pages/AdminPage";


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
    }
]);
export class App extends Component {
    render() {
        return (
            <RouterProvider router={router} />
        )
    }
}