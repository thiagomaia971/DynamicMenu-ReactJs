import * as React from 'react';

import { Menu } from '../../entities/Menu'
import MontarMenu from './MontarMenu';

export interface MontarFilhoMenuProps {
    filhos: Menu[]
}

class MontarFilhoMenu extends React.PureComponent<MontarFilhoMenuProps, any> {
    render() {

        const { filhos } = this.props

        let renderFilhos: any = filhos.map((filho, index) => {
            return (
                <li key={index}
                    className={(filho.Filhos && filho.Filhos.length) ? "dropdown-submenu" : ""} >
                    <MontarMenu menu={filho} />
                </li>
            )
        });

        return (
            <div>
                {renderFilhos}
            </div>
        );
    }
}

export default MontarFilhoMenu
