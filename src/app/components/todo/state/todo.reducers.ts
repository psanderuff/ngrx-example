import { createReducer, on } from "@ngrx/store";
import { setTodos } from "./todo.actions";
import { totoInitialState } from "./todo.state";

export const todoReducer = createReducer(
    totoInitialState,
    on(setTodos, (state, { todos }) => {
        state = {
            ...state,
            todos: todos
        }
        return state;
    })
)