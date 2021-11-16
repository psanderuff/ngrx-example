import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { ITodoModel } from 'src/app/models/todo.model';
import { loadTodos } from './state/todo.actions';
import { ITodoState } from './state/todo.state';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  
  constructor(
    private store: Store<{todoState: ITodoState}>  
    ){}
  

  todos$ = this.store.select('todoState').pipe(
    map(state => state.todos)
  )
  
  ngOnInit(): void {
    this.store.dispatch(loadTodos())
  }

}
