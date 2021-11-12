import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  {path: '',pathMatch: 'full' ,redirectTo: 'todos'},
  {path: 'user-datails', component: DetailsComponent},
  {path: 'todos', component: TodoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
