import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RamaisList } from 'src/app/model/ramais-list';

@Component({
  selector: 'app-ramais-lis-table',
  templateUrl: './ramais-lis-table.component.html',
  styleUrls: ['./ramais-lis-table.component.scss']
})
export class RamaisLisTableComponent {
  @Input() ramaisListTable: RamaisList[] = [];
  @Output() eventAddRamaisList = new EventEmitter(false);
  @Output() eventEditRamaisList = new EventEmitter(false);
  displayedColumns = ['id', 'name', 'number', 'contextPermission', 'captureGroup', 'departament', 'paused', 'actions'];

  constructor() { }

  addListTable() {
    console.log('onAddRamaisListTable');
    this.eventAddRamaisList.emit(true);
  }

  editListTable(element: RamaisList) {
    console.log('editListTable');
    this.eventEditRamaisList.emit(element);
  }

}