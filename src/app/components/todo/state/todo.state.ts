import { ITodoModel } from "src/app/models/todo.model";

export interface ITodoState {
    todos: ITodoModel[];
}

export const totoInitialState: ITodoState = {
    todos: []
}