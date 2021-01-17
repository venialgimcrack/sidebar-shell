import SidebarLinks from './SidebarLinks.js';
import SidebarMenu from './SidebarMenu';

import './Sidebar.css';

function Sidebar (props) {
    const { expanded, onMouseOver, onMouseLeave } = props;

    let sidebarClasses = `sidebar ${expanded ? 'expand' : 'contract'}`;

    // TODO implement & render logo / search controls
    return (
        <div
            className={sidebarClasses}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
        >
            <p>Sidebar</p>

            <SidebarMenu expanded={expanded}>
                <div>Item 1</div>
                <div>Item 2</div>
            </SidebarMenu>
            <hr/>
            <SidebarLinks expanded={expanded} />
        </div>
    );
}

export default Sidebar;
