import { Component, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() item : any;
  @Output() complete = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  completeItem() {
    this.complete.emit(this.item.id);
  }

  deleteItem() {
    this.delete.emit(this.item.id);
  }
}
