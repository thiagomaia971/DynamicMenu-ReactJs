import * as React from 'react';

import { Menu } from '../../entities/Menu';
import MontarFilhoMenu from './MontarFilhoMenu';

export interface MontarMenuProps {
    menu: Menu
}

class MontarMenu extends React.Component<MontarMenuProps, any> {

    constructor(props: any) {
        super(props);
    }

    public render() {

        const { menu } = this.props;

        return (
            <div >
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    {menu.Nome} <span className={menu.Filhos ? "pull-rigth caret" : "pull-rigth"}></span>
                </a>
                {
                    (menu.Filhos) ?
                        <ul className="dropdown-menu multi-level" >
                            <MontarFilhoMenu filhos={menu.Filhos} />
                        </ul>
                    :
                        ''
                }
            </div >
        )
    }
}

export default MontarMenu
