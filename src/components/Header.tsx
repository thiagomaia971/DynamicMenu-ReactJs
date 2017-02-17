import * as React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { Menu } from "../entities/Menu";

import { IAction } from "../actions/Action";
import { getMenus, GET_MENUS } from "../actions/menu";

import MontarMenu from "../components/Menu/MontarMenu";

export interface HeaderProps {
    menus: Menu[],
    getMenus: () => IAction<GET_MENUS>;
}

class Header extends React.Component<HeaderProps, any> {

    constructor(props: any){
        super(props);
    }

    public componentWillMount() {
        this.props.getMenus();
    }

    render() {

        const { menus } = this.props;

        return (
            <div>
                {
                    menus.map((menu, index) => {
                        return (
                            <MontarMenu key={index} menu={menu} />
                        )
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        menus: (state.menu.dado) ? state.menu.dado : []
    };
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({ getMenus }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
