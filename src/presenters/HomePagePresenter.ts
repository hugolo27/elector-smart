import {BaseView} from "./BaseView";

export interface HomeView extends BaseView {}

export class HomePagePresenter {
    private view: HomeView;

    constructor(
        view: HomeView,
    ) {
        this.view = view;
    }
}