import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { ITodoModel } from '../models/todo.model';
import { EMPTY, map, Observable, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { IAppState, loadTodos, setTodos, successLoadTodos } from '../store/app.state';
import { Store } from '@ngrx/store';
@Injectable({
  providedIn: 'root'
})
export class TodoEffectService {

  constructor(private actions$: Actions, private http: HttpClient,  private store: Store<{app: IAppState}>  ) { }

  load = createEffect(
    () => this.actions$.pipe(
      ofType(loadTodos),
      withLatestFrom(
        this.store.select('app').pipe(
          map(app => app.todos)
        )
      ),
      switchMap(([ action, todos ]) => {
        if(todos.length === 0) {
          return this.http.get<ITodoModel[]>('https://jsonplaceholder.typicode.com/todos')
          .pipe(
            tap(todos => 
              this.store.dispatch(setTodos({payload: todos}))
            ),
            map(() => successLoadTodos())
          )
        } 
        return of(successLoadTodos());
      }),
    )
  )
}
