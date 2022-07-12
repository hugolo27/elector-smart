import {LoginPagePresenter, LoginView} from "./LoginPagePresenter";
import {Provider} from "../core/Provider";
import {HomePagePresenter, HomeView} from "./HomePagePresenter";


export class PresenterFactory {

    loginPage = (view: LoginView): LoginPagePresenter =>
        new LoginPagePresenter(
            view,
            Provider.login(),
        );

    homePage = (view: HomeView): HomePagePresenter =>
        new HomePagePresenter(view);

}
