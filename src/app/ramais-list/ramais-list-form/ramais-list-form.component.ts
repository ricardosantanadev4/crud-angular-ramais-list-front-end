import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { RamaisListService } from 'src/app/services/ramais-list.service';

@Component({
  selector: 'app-ramais-list-form',
  templateUrl: './ramais-list-form.component.html',
  styleUrls: ['./ramais-list-form.component.scss']
})
export class RamaisListFormComponent {
  // form: FormGroup;
  form = this.formbuider.group({
    name: [''],
    number: [''],
    contextPermission: [''],
    captureGroup: [''],
    departament: ['']
  });

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private formbuider: NonNullableFormBuilder, private ramaisListService: RamaisListService, private _snackBar: MatSnackBar, private location: Location) {
    // this.form = this.formbuider.group({
    //   name: [null],
    //   number: [null],
    //   contextPermission: [null],
    //   captureGroup: [null],
    //   departament: [null]
    // })
  }

  onSubmit() {
    // this.form.value
    this.ramaisListService.save(this.form.value).subscribe({ next: data => this.onSucess('Ramal salvo com sucesso!'), error: error => this.onError('Erro ao salvar ramal.') });
  }

  onCancel() {
    console.log('onCancel');
    this.location.back();
  }

  onSucess(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
    this.onCancel();
  }

  onError(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
