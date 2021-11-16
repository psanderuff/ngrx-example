import { Component, OnInit } from '@angular/core';
import { TodoEffectService } from './components/todo/state/todo.effects';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    
  }
}


