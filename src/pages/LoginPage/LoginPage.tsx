import React, {Component} from "react";
import {LoginPagePresenter, LoginView} from "../../presenters/LoginPagePresenter";
import {PresenterFactory} from "../../presenters/PresenterFactory";
import ItemLogo from "../../assets/images/esmart-logo.png"
import "./LoginPage.scss";
import {Button, Input} from 'semantic-ui-react'
import EsmartLoader from "../../components/Loader/Loader";
import Navigator from "../../components/Navigator/Navigator";

class LoginPage extends Component<{hideHeader: any, showHeader: any}, LoginState> implements LoginView {
    state: LoginState = {
        username: '',
        password: '',
        isLoaderVisible: false,
    }
    presenter: LoginPagePresenter;

    constructor(props: any) {
        super(props);
        const presenters = new PresenterFactory();
        this.presenter = presenters.loginPage(this);
        const { hideHeader } = this.props;
        hideHeader();
    }

    hideLoader = (): void => {
        this.setState({isLoaderVisible: false});
    }

    login = (): void => {
        const {username, password} = this.state;
        this.presenter.doLogin(username, password)
    }

    navigateToNewPath = (path: string): void => {
        const { showHeader } = this.props;
        showHeader();
        // @ts-ignore
        const { navigate } = this.props;
        navigate("/");
    }

    showErrorMessage = (message: string): void =>{
    }

    showLoader = (): void => {
        this.setState({isLoaderVisible: true});
    }

    render = () => {
        const { isLoaderVisible, password, username } = this.state;
        return (
            <div className={'login-page__container__'}>
                {
                    isLoaderVisible && <EsmartLoader/>
                }
                <div className={'login-page__container__inner__'}>
                    <div className={'login-page__container__inner__main__'}>
                        <img className={'login-page__container__inner__main__logo'} src={ItemLogo} alt={'ITEM APP'}/>
                        <div className={'login-page__container__inner__main__form'}>
                            <Input className={'login-page__container__inner__main__input'}
                                   placeholder={'USUARIO'} />
                            <Input className={'login-page__container__inner__main__input'}
                                   placeholder={'CONTRASEÑA'} type={'password'} />
                            <Button className={'login-page__container__inner__main__login-btn'}
                                    onClick={this.login}>
                                {'Ingresar'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

interface LoginState {
    username: string;
    password: string;
    isLoaderVisible: boolean;
}

export default Navigator(LoginPage);