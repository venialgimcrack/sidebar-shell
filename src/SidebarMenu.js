import React, { Component } from 'react';

import plusIcon from './plus.png';

class SidebarMenu extends Component {

    constructor () {
        super();

        this.state = {
            extended: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle () {
        this.setState(state => ({
            extended: !state.extended
        }));
    }

    // TODO vary styling based on "expanded" prop
    render () {
        const { expanded, children } = this.props,
            { extended } = this.state;

        return (
            <div className="menu">
                <div
                    onClick={this.toggle}
                >
                    <img src={plusIcon} alt="Create" />
                    { expanded ? <span class="menuLabel">Create &gt;</span> : null }
                </div>
                { extended && expanded ? <div>{children}</div> : null }
            </div>
        );
    }
}

export default SidebarMenu;
