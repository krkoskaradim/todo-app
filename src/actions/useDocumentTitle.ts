import { useEffect } from 'react';

export default function useDocumentTitle(title: string): void {
    useEffect(() => {
        document.title = `Todo App - ${title}`;
    }, [title]);
}
