import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { TodoComponent } from './components/todo/todo.component';
import { CommonModule} from '@angular/common';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { FormsModule, NgModel } from '@angular/forms';
>>>>>>> cc0fc3fbf4ab418bed52b592faa904c738f363d5
import { FormComponent } from './components/form/form.component';
import { CallingAPIComponent} from './components/calling-api/calling-api.component';
import {HttpClientModule} from '@angular/common/http';
import { EditPostComponent } from './components/edit-post/edit-post.component';
<<<<<<< HEAD
import { AddPostComponent } from './components/add-post/add-post.component';
=======
>>>>>>> cc0fc3fbf4ab418bed52b592faa904c738f363d5
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    TodoComponent,
    FormComponent,
    CallingAPIComponent,
    EditPostComponent,
<<<<<<< HEAD
    AddPostComponent,
=======
>>>>>>> cc0fc3fbf4ab418bed52b592faa904c738f363d5
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    HttpClientModule,
=======
    HttpClientModule
>>>>>>> cc0fc3fbf4ab418bed52b592faa904c738f363d5
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
