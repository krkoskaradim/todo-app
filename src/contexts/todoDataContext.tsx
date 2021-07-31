import React, {
    createContext, useContext, useEffect, useState,
} from 'react';
import { getTodoData, TodoData } from '../api/todoApi';

interface TodoDataContextState {
    data?: TodoData[];
    isLoading: boolean;
    error?: Error;
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
    const [state, setState] = useState<TodoDataContextState>({ isLoading: true });
    const { children } = props;

    useEffect(() => {
        (async (): Promise<void> => {
            const { data, error } = await getTodoData();
            setState({ data, error, isLoading: false });
        })();
    }, []);

    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    );
};
