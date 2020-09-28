import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { TodoComponent } from './components/todo/todo.component';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { CallingAPIComponent } from './components/calling-api/calling-api.component';
import { HttpClientModule } from '@angular/common/http';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    TodoComponent,
    FormComponent,
    CallingAPIComponent,
    EditPostComponent,
    AddPostComponent,
    HighlightDirective,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
