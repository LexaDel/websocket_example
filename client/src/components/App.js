import ProtectedRoute from './ProtectedRouter';
import AdminPage from "../pages/AdminPage";
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPageContainer from "../pages/RegisterPage/RegisterPage.container";
import UserPageContainer from "../pages/UserPage/UserPage.container";
import PageTemplateContainer from '../pages/PageTemplate/PageTemplate.container';
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
                        <Route index element={<PageTemplateContainer>Hello</PageTemplateContainer>} />
                        <Route path="admin" element={<AdminPage />} />
                        <Route path="/user" element={<UserPageContainer />} />
                    </Route>
                    <Route path="/register" element={<RegisterPageContainer />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
