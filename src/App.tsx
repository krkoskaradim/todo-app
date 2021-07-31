import React from 'react';
import {
    Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { TodoListPage } from './pages/todoListPage';

const GlobalStyle = createGlobalStyle`
    body, html {
        width: 100%;
        min-width: 100%;
    }
`;

const App = (): JSX.Element => (
    <>
        <GlobalStyle />
        <Router>
            <Switch>
                <Route path="/" component={TodoListPage} />
            </Switch>
        </Router>
    </>
);

export default App;
