import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RamaisList } from 'src/app/model/ramais-list';

@Component({
  selector: 'app-ramais-lis-table',
  templateUrl: './ramais-lis-table.component.html',
  styleUrls: ['./ramais-lis-table.component.scss']
})
export class RamaisLisTableComponent {
  @Input() ramaisListTable: RamaisList[] = [];
  @Output() eventRamaisList = new EventEmitter(false);
  displayedColumns = ['id', 'name', 'number', 'contextPermission', 'captureGroup', 'departament', 'paused', 'actions'];

  constructor() { }

  listTable() {
    console.log('onAddRamaisListTable');
    this.eventRamaisList.emit(true);
  }
}
