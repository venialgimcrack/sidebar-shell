import React, { Component } from 'react';

class SidebarMenu extends Component {

    constructor () {
        super();

        this.state = {
            expanded: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle () {
        this.setState(state => ({
            expanded: !state.expanded
        }));
    }

    render () {
        const { children } = this.props,
            { expanded } = this.state;

        return (
            <div>
                <div
                    onClick={this.toggle}
                >
                    Create
                </div>
                { expanded ? <div className="items">{children}</div> : null }
            </div>
        );
    }
}

export default SidebarMenu;
