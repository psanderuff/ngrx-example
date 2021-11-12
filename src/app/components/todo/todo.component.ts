import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { ITodoModel } from 'src/app/models/todo.model';
import { TodoEffectService } from 'src/app/services/todo.effect.service';
import { IAppState, loadTodos, setTodos } from 'src/app/store/app.state';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  
  constructor(
    private todoService: TodoEffectService,
    private store: Store<{app: IAppState}>  
    ){}
  

  todos$ = this.store.select('app').pipe(
    map(app => app.todos)
  )
  ngOnInit(): void {

   this.store.dispatch(loadTodos())
  
  }

}
