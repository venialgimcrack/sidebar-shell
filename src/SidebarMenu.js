import React, { Component } from 'react';

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

    // TODO add icons, vary styling based on "expanded" prop
    render () {
        const { expanded, children } = this.props,
            { extended } = this.state;

        return (
            <div className="menu">
                <div
                    onClick={this.toggle}
                >
                    Create
                </div>
                { extended && expanded ? <div>{children}</div> : null }
            </div>
        );
    }
}

export default SidebarMenu;
