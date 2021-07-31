import React from 'react';
import {
    Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { TodoListPage } from './pages/todoListPage';
import { TodoDetailPage } from './pages/todoDetailPage';
import { TodoDataProvider } from './contexts/todoDataContext';
import * as config from './config/default';

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
                <TodoDataProvider>
                    <>
                        <Route exact path={config.routes.todoList} component={TodoListPage} />
                        <Route exact path={config.routes.todoDetail} component={TodoDetailPage} />
                    </>
                </TodoDataProvider>
            </Switch>
        </Router>
    </>
);

export default App;
