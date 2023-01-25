import { Component } from '@angular/core';
import { RamaisList } from 'src/app/model/ramais-list';
import { RamaisListService } from 'src/app/services/ramais-list.service';

@Component({
  selector: 'app-ramais-list',
  templateUrl: './ramais-list.component.html',
  styleUrls: ['./ramais-list.component.scss']
})
export class RamaisListComponent {
  // dataSource: RamaisList[] = [{ name: 'Ricardo - TI', number: '6099', contextPermission: 'DDI', captureGroup: '1', departament: 'TI', paused: 'não' }];
  dataSource: RamaisList[] = [];
  displayedColumns = ['id','name', 'number', 'contextPermission', 'captureGroup', 'departament', 'paused'];

  constructor(private ramaisList: RamaisListService) {
    ramaisList.getRamaisList().subscribe(ramaisList => this.dataSource = ramaisList);
  }

}
