import { todoReducer } from "../components/todo/state/todo.reducers";
import { ITodoState } from "../components/todo/state/todo.state";

export interface IAppState {
    todoState: ITodoState;
}

export const appReducer = {
    todoState: todoReducer 
}