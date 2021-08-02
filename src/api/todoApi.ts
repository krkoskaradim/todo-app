import { apiGet, ApiResponse } from './api';
import * as config from '../config/default';

export interface TodoData { // should be exported from BE
    id: string,
    title: string
}

export const getTodoData = async (): Promise<ApiResponse<TodoData[]>> => (
    apiGet<TodoData[]>(config.api.todo.getTodoData)
);
