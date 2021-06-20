import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

function app() {
    return (
        <Router>
            <Route exact path="/" component={Join}></Route>
            <Route exact path="/chat" component={Chat}></Route>
        </Router>
    )
}

export default app
