import {Login} from "../core/useCases/Login";
import {BaseView} from "./BaseView";

export interface LoginView extends BaseView {}

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
        // await this.login.execute(email, password);
        this.view.navigateToNewPath('/');
    }
}