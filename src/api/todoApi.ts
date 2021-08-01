import { apiGet, ApiResponse } from './api';

export interface TodoData { // should be exported from BE
    id: string,
    title: string
}

export const getTodoData = async (): Promise<ApiResponse<TodoData[]>> => apiGet<TodoData[]>('data/fakeTodoData.json');
