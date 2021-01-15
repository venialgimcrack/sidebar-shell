import React, { Component } from 'react';

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
            <>
                <Sidebar
                    expanded={this.state.expanded}
                    onMouseOver={this.expand}
                    onMouseLeave={this.contract}
                />
                <Content />
            </>
        );
    }
}

export default Page;
