import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
import { RamaisList } from 'src/app/model/ramais-list';
import { RamaisListService } from 'src/app/services/ramais-list.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-ramais-list',
  templateUrl: './ramais-list.component.html',
  styleUrls: ['./ramais-list.component.scss']
})
export class RamaisListComponent {
  // dataSource: RamaisList[] = [{ name: 'Ricardo - TI', number: '6099', contextPermission: 'DDI', captureGroup: '1', departament: 'TI', paused: 'não' }];
  $dataSource: Observable<RamaisList[]>;
  displayedColumns = ['id', 'name', 'number', 'contextPermission', 'captureGroup', 'departament', 'paused', 'actions'];

  constructor(private ramaisList: RamaisListService, public dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
    this.$dataSource = ramaisList.getRamaisList().pipe(
      catchError(error => {
        this.openDialog('Erro ao tentar carregar recursos.')
        return of([]);
      })
    )
  }

  openDialog(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  // no lugar de colocar ['ramais-list/new'], usa-se ['new'], { relativeTo: this.route } por que se um dia mudar o nome no path que direciona para o modulo em app-routing.module.ts a rota vai continuar funcionando
  onAdd() {
    console.log('onAdd');
    this.router.navigate(['new'], { relativeTo: this.route })
  }

}
