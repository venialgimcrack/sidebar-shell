import React, { Component } from 'react';

import SidebarLinks from './SidebarLinks.js';

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

                <SidebarLinks expanded={expanded} />
            </div>
        );
    }
}

export default Sidebar;
