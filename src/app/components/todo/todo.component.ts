import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { ITodoModel } from 'src/app/models/todo.model';
import { IAppState } from 'src/app/store/app.state';
import { loadTodos } from './state/todo.actions';
import { getTodo } from './state/todo.selectors';
import { ITodoState } from './state/todo.state';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  
  constructor(
    private store: Store<IAppState>,  
    ){}
  

  todos$ = this.store.select(getTodo);
  
  ngOnInit(): void {
    this.store.dispatch(loadTodos())
  }

}
