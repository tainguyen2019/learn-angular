import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AddPostComponent } from './components/add-post/add-post.component';
=======
>>>>>>> cc0fc3fbf4ab418bed52b592faa904c738f363d5
import { CallingAPIComponent } from './components/calling-api/calling-api.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { FormComponent } from './components/form/form.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import {TodoComponent} from './components/todo/todo.component';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', redirectTo: 'call-api/add-post', pathMatch: 'full' },
=======
  { path: '', redirectTo:'todo', pathMatch:'full'},
>>>>>>> cc0fc3fbf4ab418bed52b592faa904c738f363d5
  { path: 'todo', component: TodoComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'form', component: FormComponent },
  { path: 'call-api', component: CallingAPIComponent },
  { path: 'call-api/edit-post/:id', component: EditPostComponent },
<<<<<<< HEAD
  { path: 'call-api/add-post', component: AddPostComponent },
=======
>>>>>>> cc0fc3fbf4ab418bed52b592faa904c738f363d5
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
