import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { SimplePageStyled } from '../components/styled/simplePageStyled';
import useDocumentTitle from '../actions/useDocumentTitle';
import { TodoDetail } from '../components/todo/todoDetail';
import * as config from '../config/default';

export interface TodoDetailPageParams {
    id: string
}

export const TodoDetailPage = (): JSX.Element => {
    const { id } = useParams<TodoDetailPageParams>();
    useDocumentTitle(`Detail ${id}`);

    return (
        <SimplePageStyled>
            <Link to={config.routes.todoList}>
                <Button icon={<LeftOutlined />} />
            </Link>
            <TodoDetail id={id} />
        </SimplePageStyled>
    );
};
