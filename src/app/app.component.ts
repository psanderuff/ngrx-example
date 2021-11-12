import { Component, OnInit } from '@angular/core';
import { ITodoModel } from './models/todo.model';
import { TodoEffectService } from './services/todo.effect.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  todos: ITodoModel[] = [];

  constructor(){}

  ngOnInit(): void {
    
  }
}


