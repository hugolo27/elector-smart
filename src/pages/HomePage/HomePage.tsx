import React, {Component} from "react";
import {PresenterFactory} from "../../presenters/PresenterFactory";
import "./HomePage.scss";
import {HomePagePresenter, HomeView} from "../../presenters/HomePagePresenter";
import EsmartLoader from "../../components/Loader/Loader";
import Navigator from "../../components/Navigator/Navigator";

class HomePage extends Component<{}, HomeState> implements HomeView {
    state: HomeState = {
        isLoaderVisible: false,
    }
    presenter: HomePagePresenter;

    constructor(props: any) {
        super(props);
        const presenters = new PresenterFactory();
        this.presenter = presenters.homePage(this);
    }

    hideLoader = (): void => {
    }

    navigateToNewPath = (path: string): void => {
    }

    showErrorMessage = (message: string): void =>{
    }

    showLoader = (): void => {
    }

    render = () => {
        const { isLoaderVisible } = this.state;
        return (
            <div className={'home-page__container__'}>
                {
                    isLoaderVisible && <EsmartLoader/>
                }
                <span className={'home-page__container__title'}>
                    {'Inicio'}
                </span>
            </div>
        );
    }
}

interface HomeState {
    isLoaderVisible: boolean
}

export default Navigator(HomePage);