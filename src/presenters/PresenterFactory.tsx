import {LoginPagePresenter, LoginView} from "./LoginPagePresenter";
import {Provider} from "../core/Provider";


export class PresenterFactory {

    loginPage = (view: LoginView): LoginPagePresenter =>
        new LoginPagePresenter(
            view,
            Provider.login(),
        );

}
