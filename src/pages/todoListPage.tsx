import React from 'react';
import { TodoList } from '../components/todo/todoList';
import { SimplePageStyled } from '../components/styled/simplePageStyled';
import useDocumentTitle from '../actions/useDocumentTitle';

export const TodoListPage = (): JSX.Element => {
    useDocumentTitle('List');

    return (
        <SimplePageStyled>
            <TodoList />
        </SimplePageStyled>
    );
};
