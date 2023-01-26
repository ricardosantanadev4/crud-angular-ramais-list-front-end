import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RamaisList } from 'src/app/model/ramais-list';
import { RamaisListService } from 'src/app/services/ramais-list.service';

@Component({
  selector: 'app-ramais-list',
  templateUrl: './ramais-list.component.html',
  styleUrls: ['./ramais-list.component.scss']
})
export class RamaisListComponent {
  // dataSource: RamaisList[] = [{ name: 'Ricardo - TI', number: '6099', contextPermission: 'DDI', captureGroup: '1', departament: 'TI', paused: 'não' }];
  $dataSource: Observable<RamaisList[]>;
  displayedColumns = ['id', 'name', 'number', 'contextPermission', 'captureGroup', 'departament', 'paused'];

  constructor(private ramaisList: RamaisListService) {
    this.$dataSource = ramaisList.getRamaisList()
  }

}
