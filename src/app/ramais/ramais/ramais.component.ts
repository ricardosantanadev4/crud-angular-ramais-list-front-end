import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Ramais } from 'src/app/model/ramais';
import { RamaisService } from 'src/app/services/ramais.service';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-ramais',
  templateUrl: './ramais.component.html',
  styleUrls: ['./ramais.component.scss']
})
export class RamaisListComponent {
  // dataSource: RamaisList[] = [{ name: 'Ricardo - TI', number: '6099', contextPermission: 'DDI', captureGroup: '1', departament: 'TI', paused: 'não' }];
  $dataSource: Observable<Ramais[]> | null = null;


  constructor(private ramaisService: RamaisService, public dialog: MatDialog, private router: Router,
    private route: ActivatedRoute, private _snackBar: MatSnackBar) {
    this.refresh();
  }

  refresh() {
    console.log('refresh');
    this.$dataSource = this.ramaisService.list().pipe(
      catchError(() => {
        this.onError('Erro ao tentar carregar recursos.')
        return of([]);
      })
    )
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  // no lugar de colocar ['ramais-list/new'], usa-se ['new'], { relativeTo: this.route } por que se um dia mudar o nome no path que direciona para o modulo em app-routing.module.ts a rota vai continuar funcionando
  addList() {
    console.log('onAddRamaisList');
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  editRamais(element: Ramais) {
    console.log('editRamais');
    console.log(element);
    this.router.navigate(['edit', element.id], { relativeTo: this.route });
  }

  deleteRamais(event: Ramais) {
    console.log('deleteRamais');
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja excluir esse ramal?',
    });

    dialogRef.afterClosed().subscribe({
      next: (result: boolean) => {
        if (result) {
          this.ramaisService.delete(event.id).subscribe({
            next: () => {
              this.refresh();
              this.openSnackBar('Ramal excluido com sucesso.', '');
            }, error: () => this.openSnackBar('Erro ao tentar excluir ramal.', 'X'),
          });
        }
      }
    });
  }

  openSnackBar(message: string, action: string) {
    let duration: number;
    if (action) {
      duration = 0;
    } else {
      duration = 3000;
    }
    this._snackBar.open(message, action, {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: duration,
    })
  }

}
