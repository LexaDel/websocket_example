import { Component } from "react";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ProtectedRoute from './ProtectedRouter';
import LoginPage from '../pages/LoginPage/LoginPage';


export class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<ProtectedRoute />}>
                        <Route exact path="/" element={<div>Hello</div>} />
                        <Route path="/admin" element={<AdminPage />} />
                    </Route>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        )
    }
}