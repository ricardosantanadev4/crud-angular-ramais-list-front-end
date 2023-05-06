import { Component } from '@angular/core';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  formSearch = this.formBuilder.control('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]);

  constructor(private formBuilder: NonNullableFormBuilder) { }

  refreshForm() {
    return this.formSearch = this.formBuilder.control('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]);
  }

  getErrorMessage() {
    console.log('getErrorMessage');
    if (this.formSearch.hasError('required')) {
      return 'Campo vazio.';
    }

    if (this.formSearch?.hasError('minlength')) {
      const requiredLength = this.formSearch.errors ? this.formSearch.errors['minlength']['requiredLength'] : 1;
      return `Mínimo de ${requiredLength} caracteres`;
    }

    if (this.formSearch?.hasError('maxlength')) {
      const requiredLength = this.formSearch.errors ? this.formSearch.errors['maxlength']['requiredLength'] : 1;
      return `Mánimo de ${requiredLength} caracteres`;
    }

    return
  }

}