import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallingAPIComponent } from './components/calling-api/calling-api.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { FormComponent } from './components/form/form.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { TodoComponent } from './components/todo/todo.component';
import { AddPostComponent } from './components/add-post/add-post.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: 'todo', component: TodoComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'form', component: FormComponent },
  { path: 'call-api', component: CallingAPIComponent },
  { path: 'call-api/edit-post/:id', component: EditPostComponent },
  { path: 'call-api/add-post', component: AddPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
