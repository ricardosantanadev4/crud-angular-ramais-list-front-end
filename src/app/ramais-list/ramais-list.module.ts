import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RamaisListRoutingModule } from './ramais-list-routing.module';
import { RamaisListComponent } from './ramais-list/ramais-list.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { RamaisListFormComponent } from './ramais-list-form/ramais-list-form.component';


@NgModule({
  declarations: [
    RamaisListComponent,
    RamaisListFormComponent
  ],
  imports: [
    CommonModule,
    RamaisListRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class RamaisListModule { }
