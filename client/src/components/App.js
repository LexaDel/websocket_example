import { Component } from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
        path: "/admin",
        element: <div> Hello Admin </div>,
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