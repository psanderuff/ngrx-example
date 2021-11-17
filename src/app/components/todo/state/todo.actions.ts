import { createAction, props } from "@ngrx/store";
import { ITodoModel } from "src/app/models/todo.model";


const LOAD_TODOS = '[TODOS] Load todos';
const LOAD_TODOS_SUCCESS = '[TODOS] [SUCESS] Load todos';
const SET_TODO = '[TODOS] set todos';


export const loadTodos = createAction(LOAD_TODOS);
export const successLoadTodos = createAction(LOAD_TODOS_SUCCESS);
export const setTodos = createAction(SET_TODO, props<{todos: ITodoModel[]}>());