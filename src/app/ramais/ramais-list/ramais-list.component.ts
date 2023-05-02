import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ramais } from 'src/app/model/ramais';

@Component({
  selector: 'app-ramais-list',
  templateUrl: './ramais-list.component.html',
  styleUrls: ['./ramais-list.component.scss']
})
export class RamaisLisTableComponent {
  @Input() ramaisListTable: Ramais[] = [];
  @Output() eventAddRamaisList = new EventEmitter(false);
  @Output() eventEditRamaisList = new EventEmitter(false);
  displayedColumns = ['id', 'name', 'number', 'contextPermission', 'captureGroup', 'departament', 'paused', 'actions'];

  constructor() { }

  addListTable() {
    console.log('onAddRamaisListTable');
    this.eventAddRamaisList.emit(true);
  }

  editList(element: Ramais) {
    console.log('editList');
    this.eventEditRamaisList.emit(element);
  }

  deleteList(){
    console.log('deleteList');
  }
}