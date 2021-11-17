import { Action, createReducer, on } from "@ngrx/store";
import { setTodos } from "./todo.actions";
import { ITodoState, totoInitialState } from "./todo.state";

const _todoReducer = createReducer(
    totoInitialState,
    on(setTodos, (state, { todos }) => {
        state = {
            ...state,
            todos: todos
        }
        return state;
    })
)

export function todoReducer(state: ITodoState | undefined, action: Action) {
    return _todoReducer(state, action);
}