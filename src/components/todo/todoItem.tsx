import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import Paragraph from 'antd/es/typography/Paragraph';
import { EllipsisConfig } from 'antd/es/typography/Base';
import { TodoData } from '../../api/todoApi';
import { TodoItemDetailAction } from './todoItemActions';

export interface TodoItemProps {
    todoData: TodoData
    hideActions?: boolean
    ellipsis?: EllipsisConfig
}

const CardStyled = styled(Card)`
    .ant-card-body {
      min-height: 10rem;
    }
`;

const Wrapper = styled.div`
    text-align: center;
`;

export const TodoItem = (props: TodoItemProps): JSX.Element => {
    const { todoData, hideActions, ellipsis } = props;

    return (
        <Wrapper>
            <CardStyled
                actions={
                    hideActions ? [] : [<TodoItemDetailAction id={todoData.id} />]
                }
            >
                <Paragraph ellipsis={ellipsis}>{todoData.title}</Paragraph>
            </CardStyled>
        </Wrapper>
    );
};
