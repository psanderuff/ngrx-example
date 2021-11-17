import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ITodoState } from "./todo.state";

const getTodoState = createFeatureSelector<ITodoState>('todoState');

export const getTodo = createSelector(getTodoState, state => state.todos);