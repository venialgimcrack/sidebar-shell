import SidebarLinks from './SidebarLinks.js';
import SidebarMenu from './SidebarMenu';
import SidebarSearch from './SidebarSearch';

import './Sidebar.css';

function Sidebar (props) {
    const { expanded, onMouseOver, onMouseLeave } = props;

    let sidebarClasses = `sidebar ${expanded ? 'expand' : 'contract'}`;

    // TODO application logo, label
    return (
        <div
            className={sidebarClasses}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
        >
            <p>Sidebar</p>

            <SidebarSearch expanded={expanded} />

            <hr />

            <SidebarMenu expanded={expanded}>
                <div>Item 1</div>
                <div>Item 2</div>
            </SidebarMenu>

            <SidebarLinks expanded={expanded} />
        </div>
    );
}

export default Sidebar;
