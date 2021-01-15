import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class SidebarLinks extends Component {
    render () {
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
}

export default SidebarLinks;
