import { Result } from 'antd';
import React from 'react';

export const Page404 = (): JSX.Element => (
    <Result
        status="404"
        title="Sorry, the page you visited does not exist"
    />
);
