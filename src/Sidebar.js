import React, { Component } from 'react';

import './Sidebar.css';

class Sidebar extends Component {
    render () {
        const { expanded, onMouseOver, onMouseLeave } = this.props;

        let sidebarClasses = `sidebar ${expanded ? 'expand' : 'contract'}`;

        return (
            <div
                className={sidebarClasses}
                onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
            >
                <p>Sidebar</p>
            </div>
        );
    }
}

export default Sidebar;
