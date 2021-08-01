import React from 'react';
import { Col, Row, Spin } from 'antd';
import { useTodoData } from '../../contexts/todoDataContext';
import { TodoItem } from './todoItem';

export const TodoList = (): JSX.Element => {
    const { data, isLoading } = useTodoData();

    return (
        <Spin size="large" spinning={isLoading}>
            <Row gutter={[16, 16]}>
                {
                    data?.map((todoData) => (
                        <Col span={8} key={todoData.id}>
                            <TodoItem
                                todoData={todoData}
                                ellipsis={{
                                    rows: 4,
                                    expandable: false,
                                    symbol: '...',
                                }}
                            />
                        </Col>
                    ))
                }
            </Row>
        </Spin>
    );
};
