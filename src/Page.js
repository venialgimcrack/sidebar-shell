import React, { Component } from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';

import Sidebar from './Sidebar.js';
import Content from './Content.js';

class Page extends Component {

    constructor () {
        super();

        this.state = {
            expanded: false
        };

        this.expand = this.expand.bind(this);
        this.contract = this.contract.bind(this);
    }

    expand () {
        this.setState({ expanded: true });
    }

    contract () {
        this.setState({ expanded: false });
    }

    render () {
        return (
            <Router>
                <Sidebar
                    expanded={this.state.expanded}
                    onMouseOver={this.expand}
                    onMouseLeave={this.contract}
                />
                <Content />
            </Router>
        );
    }
}

export default Page;
