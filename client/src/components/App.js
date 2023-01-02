import ProtectedRoute from './ProtectedRouter';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPageContainer from "../pages/RegisterPage/RegisterPage.container";
import UserPageContainer from "../pages/UserPage/UserPage.container";
import DashboardPageContainer from '../pages/DashboardPage/DashboardPage.container';
import UserListPage from '../pages/UserListPage/UserListPage';
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import { Component } from "react";


export class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<ProtectedRoute />}>
                        <Route index element={<DashboardPageContainer />} />
                        <Route path="/user" element={<UserPageContainer />} />
                        <Route path="/users" element={<UserListPage />} />
                    </Route>
                    <Route path="/register" element={<RegisterPageContainer />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
