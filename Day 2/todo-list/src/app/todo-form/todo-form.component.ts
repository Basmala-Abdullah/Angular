import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  imports: [],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  @Output() formSendToParent = new EventEmitter<string>();

  handleAddItem(item: string) {
   
    this.formSendToParent.emit(item)
    console.log('sending to parent ' + item);
  }

}
