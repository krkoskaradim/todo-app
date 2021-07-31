import React from 'react';
import { Link } from 'react-router-dom';
import { EyeOutlined } from '@ant-design/icons';
import * as config from '../../config/default';

export interface TodoItemDetailActionProps {
    id: string
}

export const TodoItemDetailAction = (props: TodoItemDetailActionProps): JSX.Element => {
    const { id } = props;

    // TODO create generic params assigner
    return (
        <Link to={config.routes.todoDetail.replace(':id', id)}>
            <EyeOutlined />
        </Link>
    );
};
