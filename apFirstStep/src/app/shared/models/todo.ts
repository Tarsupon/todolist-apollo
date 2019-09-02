export interface ITodo {
    id: number;
    taskName: string;
}

export interface IQuery {
    todos: ITodo[];
}
