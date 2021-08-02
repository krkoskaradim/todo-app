import * as config from '../config/default';

export interface ApiResponse<T> {
    data?: T,
    error?: Error
}

export const apiGet = async <T>(url: string): Promise<ApiResponse<T>> => {
    try {
        const response = await fetch(`${config.api.baseUrl}${url}`);
        const json: T = await response.json();
        return { data: json };
    } catch (error) {
        return { error };
    }
};
