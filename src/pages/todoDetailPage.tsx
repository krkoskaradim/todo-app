import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { SimplePageStyled } from '../components/styled/simplePageStyled';
import useDocumentTitle from '../actions/useDocumentTitle';
import { TodoDetail } from '../components/todo/todoDetail';
import * as config from '../config/default';

export interface TodoDetailPageParams {
    id: string
}

const Wrapper = styled.div`
    width: 50vw;
    align-self: center;
`;

export const TodoDetailPage = (): JSX.Element => {
    const { id } = useParams<TodoDetailPageParams>();
    useDocumentTitle(`Detail ${id}`);

    return (
        <SimplePageStyled>
            <Link to={config.routes.todoList}>
                <Button icon={<LeftOutlined />} />
            </Link>
            <Wrapper>
                <TodoDetail id={id} />
            </Wrapper>
        </SimplePageStyled>
    );
};
