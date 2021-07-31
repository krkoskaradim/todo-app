import React from 'react';
import { TodoDataProvider } from '../contexts/todoDataContext';
import { TodoList } from '../components/todo/todoList';
import { SimplePageStyled } from '../components/styled/simple-page-styled';
import useDocumentTitle from '../actions/useDocumentTitle';

export const TodoListPage = (): JSX.Element => {
    useDocumentTitle('List');

    return (
        <TodoDataProvider>
            <SimplePageStyled>
                <TodoList />
            </SimplePageStyled>
        </TodoDataProvider>
    );
};
