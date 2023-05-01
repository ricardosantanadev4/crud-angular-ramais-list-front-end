import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Ramais } from 'src/app/model/ramais';
import { RamaisService } from 'src/app/services/ramais.service';

@Component({
  selector: 'app-ramais-list-form',
  templateUrl: './ramais-list-form.component.html',
  styleUrls: ['./ramais-list-form.component.scss']
})
export class RamaisListFormComponent {
  // form: FormGroup;
  form = this.formbuider.group({
    id: [''],
    name: [''],
    number: [''],
    contextPermission: [''],
    captureGroup: [''],
    departament: ['']
  });

  constructor(private formbuider: NonNullableFormBuilder, private ramaisService: RamaisService
    , private _snackBar: MatSnackBar, private location: Location, private route: ActivatedRoute) {

    // this.form = this.formbuider.group({
    //   name: [null],
    //   number: [null],
    //   contextPermission: [null],
    //   captureGroup: [null],
    //   departament: [null]
    // })

    const ramais: Ramais = this.route.snapshot.data['ramais'];
    console.log(ramais);
    this.form.setValue(
      {
        id: ramais.id,
        name: ramais.name,
        number: ramais.number,
        contextPermission: ramais.contextPermission,
        captureGroup: ramais.captureGroup,
        departament: ramais.departament,
      })
  }

  onSubmit() {
    // this.form.value
    console.log('onSubmit');
    if (this.form.value) {
      this.ramaisService.update(this.form.value)
        .subscribe({
          next: () => this.onSucess('Ramal Editado com sucesso!'),
          error: () => this.onError('Erro ao editar ramal.')
        });
    }
    return this.ramaisService.save(this.form.value)
      .subscribe({
        next: () => this.onSucess('Ramal salvo com sucesso!'),
        error: () => this.onError('Erro ao salvar ramal.')
      });
  }

  onCancel() {
    console.log('onCancel');
    this.location.back();
  }

  onSucess(message: string) {
    this.onSnackBar(message);
    this.onCancel();
  }

  onError(message: string) {
    this.onSnackBar(message);
  }

  onSnackBar(message: string) {
    console.log('onSnackBar');
    this._snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}