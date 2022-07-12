import React, {Component} from "react";
import Header from "../components/Header/Header";
import LoginPage from "../pages/LoginPage/LoginPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import "./MainLayout.scss";


class MainLayout extends Component<{}, MainLayoutState>  {
    state: MainLayoutState = {
        isHeaderVisible: true
    }

    hideHeader = () => this.setState({isHeaderVisible: false});

    showHeader = () => this.setState({isHeaderVisible: true});

    render = () => {
        const { isHeaderVisible } = this.state;
        return (
            <div className={'main-layout__container__'}>
                {
                    isHeaderVisible && <Header/>
                }
                <BrowserRouter>
                    <Routes>
                        <Route path={'/login'} element={<LoginPage showHeader={this.showHeader}
                            hideHeader={this.hideHeader}
                        />}>
                        </Route>
                        <Route path={'/'} element={<HomePage />}>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    };
}

interface MainLayoutState {
    isHeaderVisible: boolean;
}

export default MainLayout;