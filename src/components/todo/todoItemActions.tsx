import React from 'react';
import { Link } from 'react-router-dom';
import { EyeOutlined } from '@ant-design/icons';
import * as config from '../../config/default';
import { getUrlWithParams } from '../../utils/routeUtils';

export interface TodoItemDetailActionProps {
    id: string
}

export const TodoItemDetailAction = (props: TodoItemDetailActionProps): JSX.Element => {
    const { id } = props;

    return (
        <Link to={getUrlWithParams(config.routes.todoDetail, [{ key: 'id', value: id.toString() }])}>
            <EyeOutlined />
        </Link>
    );
};
