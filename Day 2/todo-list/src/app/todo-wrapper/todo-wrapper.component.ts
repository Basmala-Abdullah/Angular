import { Component, Input, OnInit } from '@angular/core';
import { TodoFormComponent } from "../todo-form/todo-form.component";
import { TodoListComponent } from "../todo-list/todo-list.component";

@Component({
  selector: 'app-todo-wrapper',
  imports: [TodoFormComponent, TodoListComponent],
  templateUrl: './todo-wrapper.component.html',
  styleUrl: './todo-wrapper.component.css'
})

export class TodoWrapperComponent  {
  
  items: { id: number; text: string, completed: boolean }[] = [];
  static itemsNo: number = 0;

  constructor(){
    let savedItems = localStorage.getItem('todoItems');
    if (savedItems) {
      this.items = JSON.parse(savedItems);
      TodoWrapperComponent.itemsNo = this.items.length;
    }
  }


  receivedFromFormChild(item: string){
    console.log("from parent: "+item);
    if(item !== '') {
      TodoWrapperComponent.itemsNo++;
      this.items.push({id: TodoWrapperComponent.itemsNo, text: item, completed: false});
      this.saveItemsToLocalStorage();
    }
  }
  
  handleDeleteItem(itemId: number) {
    this.items = this.items.filter(item => item.id !== itemId);
    TodoWrapperComponent.itemsNo--;
    this.saveItemsToLocalStorage();
  }

  handleCompleteItem(itemId: number) {
    let item = this.items.find(item => item.id === itemId);
    if (item) {
      item.completed = !item.completed;
      this.saveItemsToLocalStorage(); 
    }
  }

   saveItemsToLocalStorage() {
    localStorage.setItem('todoItems', JSON.stringify(this.items));
  }



}
