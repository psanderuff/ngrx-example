import { createAction, props } from "@ngrx/store";
import { ITodoModel } from "src/app/models/todo.model";


export const TODO_LOAD_ALL = '[TODOS] Load todos';
export const TODO_LOAD_ALL_SUCCESS = '[TODOS] [SUCESS] Load todos';
export const SET_TODO = '[TODOS] set todos';


export const loadTodos = createAction(TODO_LOAD_ALL);
export const successLoadTodos = createAction(TODO_LOAD_ALL_SUCCESS);
export const setTodos = createAction(SET_TODO, props<{todos: ITodoModel[]}>());