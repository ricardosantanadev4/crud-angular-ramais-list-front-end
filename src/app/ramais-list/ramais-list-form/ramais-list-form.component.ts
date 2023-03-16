import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ramais-list-form',
  templateUrl: './ramais-list-form.component.html',
  styleUrls: ['./ramais-list-form.component.scss']
})
export class RamaisListFormComponent {
  form: FormGroup;

  constructor(private formbuider: FormBuilder) {
    this.form = this.formbuider.group({
      name: [null],
      number: [null],
      contextPermission: [null],
      captureGroup: [null],
      departament: [null]
    })
  }

  onSubmit() {
    console.log('onSubmit');
  }

  onCancel() {
    console.log('onCancel');
  }
}
