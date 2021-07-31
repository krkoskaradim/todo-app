import React from 'react';
import { Card } from 'antd';
import { TodoData } from '../../api/todoApi';
import { TodoItemDetailAction } from './todoItemActions';

export interface TodoItemProps {
    todoData: TodoData
    hideActions?: boolean
}

export const TodoItem = (props: TodoItemProps): JSX.Element => {
    const { todoData, hideActions } = props;

    return (
        <Card
            actions={
                hideActions ? [] : [<TodoItemDetailAction id={todoData.id} />]
            }
        >
            {todoData.title}
        </Card>
    );
};
