import {HeaderView} from "../../presenters/HeaderPresenter";
import "./Header.scss";
import React, {Component} from "react";
import {Icon} from "semantic-ui-react";

class Header extends Component implements HeaderView {
    render = () => {
        return (<div className={'header__container__'}>
            <Icon className={'header__container__menu-toggle'} name={'bars'} size={'big'} />
            <Icon className={'header__container__user-toggle'} name={'user circle'} size={'big'} />
        </div>);
    }
}

export default Header;