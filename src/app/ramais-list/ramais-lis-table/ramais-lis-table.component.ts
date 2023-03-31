import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RamaisList } from 'src/app/model/ramais-list';

@Component({
  selector: 'app-ramais-lis-table',
  templateUrl: './ramais-lis-table.component.html',
  styleUrls: ['./ramais-lis-table.component.scss']
})
export class RamaisLisTableComponent {
  @Input() ramaisListTable: RamaisList[] = []
  displayedColumns = ['id', 'name', 'number', 'contextPermission', 'captureGroup', 'departament', 'paused', 'actions'];

  constructor(private router: Router, private route: ActivatedRoute) { }

  // no lugar de colocar ['ramais-list/new'], usa-se ['new'], { relativeTo: this.route } por que se um dia mudar o nome no path que direciona para o modulo em app-routing.module.ts a rota vai continuar funcionando
  onAdd() {
    console.log('onAdd');
    this.router.navigate(['new'], { relativeTo: this.route })
  }
}
