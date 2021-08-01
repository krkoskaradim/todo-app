import React, {
    createContext, useContext, useEffect, useState,
} from 'react';
import { getTodoData, TodoData } from '../api/todoApi';

interface TodoDataContextState {
    data?: TodoData[];
    isLoading: boolean;
    error?: Error;
    refetch: () => Promise<void>;
}

const Context = createContext<TodoDataContextState | null>(null);

export const useTodoData = (): TodoDataContextState => {
    const contextState = useContext(Context);

    if (contextState === null) {
        throw new Error('Does not have provider');
    }

    return contextState;
};

interface TodoDataProviderProps {
    children: JSX.Element
}

export const TodoDataProvider = (props: TodoDataProviderProps): JSX.Element => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const refetch = async (): Promise<void> => {
        setIsLoading(true);
    };

    const [state, setState] = useState<TodoDataContextState>({ isLoading, refetch });
    const { children } = props;

    useEffect(() => {
        if (isLoading) {
            (async (): Promise<void> => {
                const { data, error } = await getTodoData();
                setIsLoading(false);
                setState({
                    ...state, data, error, isLoading: false,
                });
            })();
        }
    }, [isLoading, state]);

    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    );
};
