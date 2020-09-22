import { trigger } from '@angular/animations';
import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'todo-component',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit, OnChanges{
  todoArray = ['Java', 'Angular'];
  number = 9;

  ngOnInit(){
    console.log('On Init');
  }

  ngOnChanges(){
    console.log('On Changes');
  }

  addTodo(todoElement) {
    if (todoElement.value) {
      this.todoArray.push(todoElement.value);
      todoElement.value = '';
    }
    // console.log(this.todoArray);
  }
  deleteTodo(todo) {
    this.todoArray = this.todoArray.filter((item) => item != todo);
  }
}
