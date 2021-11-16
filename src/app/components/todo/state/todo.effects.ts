import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { EMPTY, map, Observable, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ITodoModel } from 'src/app/models/todo.model';
import { loadTodos, setTodos, successLoadTodos } from './todo.actions';
import { ITodoState } from './todo.state';
@Injectable({
  providedIn: 'root'
})
export class TodoEffectService {

  constructor(private actions$: Actions, private http: HttpClient,  private store: Store<{todoState: ITodoState}>  ) { }

  load$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadTodos),
      withLatestFrom(
        this.store.select('todoState').pipe(
          map(state => state.todos)
        )
      ),
      switchMap(([action, state]) => {
        if(state.length === 0) {
          return this.http.get<ITodoModel[]>('https://jsonplaceholder.typicode.com/todos')
          .pipe(
            tap(todos => 
              this.store.dispatch(setTodos({todos: todos}))
            ),
            map(() => successLoadTodos())
          )
        } 
        return of(successLoadTodos());
      }),
    )
  )
}
