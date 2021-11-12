import { createAction, createReducer, on, props } from "@ngrx/store";
import { ITodoModel } from "../models/todo.model";

export interface IAppState {
    todos: ITodoModel[];
}

export const appInitialState: IAppState = {
    todos: []
}

export const loadTodos = createAction('[App] Carrega todos');
export const successLoadTodos = createAction('[App] [SUCESS] Carrega todos');
export const setTodos = createAction('[App] Define todos', props<{payload: ITodoModel[]}>());

export const appReducer = createReducer(
    appInitialState,
    on(setTodos, (state, {payload}) => {
        state = {
            ...state,
            todos: payload
        }
        return state;
    })
)