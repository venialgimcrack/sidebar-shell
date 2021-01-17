import {
    Link
} from 'react-router-dom';

function SidebarLinks () {
    // TODO read "expanded" prop and render icon-only links if !expanded
    return (
        <div>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/bugs">Bugs</Link>
            <br/>
            <Link to="/epics">Epics</Link>
        </div>
    );
}

export default SidebarLinks;
