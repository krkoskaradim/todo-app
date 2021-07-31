export interface TodoData { // should be exported from BE
    id: string,
    title: string
}

export interface ApiResponse<T> {
    data?: T,
    error?: Error
}

export const getTodoData = async (): Promise<ApiResponse<TodoData[]>> => {
    try {
        const response = await fetch('data/fakeTodoData.json');
        const json: TodoData[] = await response.json();

        return { data: json };
    } catch (error) {
        return { error };
    }
};
