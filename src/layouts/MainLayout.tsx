import React, {Component} from "react";
import Header from "../components/Header/Header";
import LoginPage from "../pages/LoginPage/LoginPage";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

class MainLayout extends Component {

    render = () => {
        return (
            <>
                <Header
                />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginPage />}>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </>
        );
    };
}

export default MainLayout;