import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  formSearch = this.formBuilder.group({
    ramal: ['']
  })

  constructor(private formBuilder: NonNullableFormBuilder) { }

  clearField() {
    this.formSearch.setValue({ ramal: '' });
  }
}