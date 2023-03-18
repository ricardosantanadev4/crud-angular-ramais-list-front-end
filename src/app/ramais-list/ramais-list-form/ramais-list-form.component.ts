import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RamaisList } from 'src/app/model/ramais-list';
import { RamaisListService } from 'src/app/services/ramais-list.service';

@Component({
  selector: 'app-ramais-list-form',
  templateUrl: './ramais-list-form.component.html',
  styleUrls: ['./ramais-list-form.component.scss']
})
export class RamaisListFormComponent {
  form: FormGroup;

  constructor(private formbuider: FormBuilder, private ramaisListService: RamaisListService) {
    this.form = this.formbuider.group({
      name: [null],
      number: [null],
      contextPermission: [null],
      captureGroup: [null],
      departament: [null]
    })
  }

  onSubmit() {
    // console.log(this.form.value);
    this.ramaisListService.save(this.form.value)
  }

  onCancel() {
    console.log('onCancel');
  }

}
