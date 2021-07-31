import React from 'react';
import { Card } from 'antd';
import { TodoData } from '../../api/todoApi';

export interface TodoItemProps {
    todoData: TodoData
}

export const TodoItem = (props: TodoItemProps): JSX.Element => {
    const { todoData } = props;

    return (
        <Card title={todoData.title} />
    );
};
