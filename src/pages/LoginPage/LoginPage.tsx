import React, {Component} from "react";
import {LoginPagePresenter, LoginView} from "../../presenters/LoginPagePresenter";
import {PresenterFactory} from "../../presenters/PresenterFactory";
import ItemLogo from "../../assets/images/esmart-logo.png"
import "./LoginPage.scss";
import { Input, Button } from 'semantic-ui-react'

class LoginPage extends Component<{}, LoginState> implements LoginView {
    state: LoginState = {
        username: '',
        password: '',
        isLoaderVisible: true,
    }
    presenter: LoginPagePresenter;

    constructor(props: any) {
        super(props);
        const presenters = new PresenterFactory();
        this.presenter = presenters.loginPage(this);
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
        const { isLoaderVisible, password, username } = this.state;
        return (
            <div className={'login-page__container__'}>
                <div className={'login-page__container__inner__'}>
                    <div className={'login-page__container__inner__main__'}>
                        <img className={'login-page__container__inner__main__logo'} src={ItemLogo} alt={'ITEM APP'}/>
                        <div className={'login-page__container__inner__main__form'}>
                            <Input className={'login-page__container__inner__main__input'}
                                   placeholder={'USUARIO'} />
                            <Input className={'login-page__container__inner__main__input'}
                                   placeholder={'CONTRASEÑA'} />
                            <Button className={'login-page__container__inner__main__login-btn'}>
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

export default LoginPage;