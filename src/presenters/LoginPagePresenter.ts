import {Login} from "../core/useCases/Login";

export interface LoginView {
    showLoader(): void;

    hideLoader(): void;

    showErrorMessage(message: string): void;

    navigateToNewPath(path: string): void;
}

export class LoginPagePresenter {
    private view: LoginView;
    private login: Login;

    constructor(
        view: LoginView,
        login: Login,
    ) {
        this.view = view;
        this.login = login;
    }

    doLogin = async(email: string, password: string) => {
        await this.login.execute(email, password);
    }
}