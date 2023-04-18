import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RamaisListFormComponent } from './ramais-list-form/ramais-list-form.component';
import { RamaisListComponent } from './ramais/ramais.component';

const routes: Routes = [
  { path: '', component: RamaisListComponent },
  { path: 'new', component: RamaisListFormComponent },
  { path: 'edit/:id', component: RamaisListFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RamaisListRoutingModule {

}
