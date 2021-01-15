import {
    Switch,
    Route
} from 'react-router-dom';

import Homepage from './HomePage.js';
import Bugs from './Bugs.js';
import Epics from './Epics.js';

import './Content.css';

function Content () {
    return (
        <div className="content">
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route path="/bugs">
                    <Bugs />
                </Route>
                <Route path="/epics">
                    <Epics />
                </Route>
            </Switch>
        </div>
    );
}

export default Content;
