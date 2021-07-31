import React from 'react';
import { Result, Spin } from 'antd';
import { useTodoData } from '../../contexts/todoDataContext';
import { TodoItem } from './todoItem';

export interface TodoDetailProps {
    id: string
}

export const TodoDetail = (props: TodoDetailProps): JSX.Element => {
    const { id } = props;
    const { data, isLoading } = useTodoData();
    const todoData = data?.find((dataEl) => dataEl.id === id);

    if (isLoading) {
        return <Spin size="large" spinning />;
    }

    if (!todoData) {
        return (
            <Result
                status="404"
                title="Sorry, that todo item does not exists"
            />
        );
    }

    return (
        <TodoItem hideActions todoData={todoData} />
    );
};
