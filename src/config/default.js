module.exports = {
    routes: {
        todoList: '/',
        todoDetail: '/detail/:id',
    },
    api: {
        baseUrl: 'data/',
        todo: {
            getTodoData: 'fakeTodoData.json',
        },
    },
};
