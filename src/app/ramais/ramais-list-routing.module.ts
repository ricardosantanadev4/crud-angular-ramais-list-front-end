import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RamaisResolver } from './guards/ramais.resolver';
import { RamaisListFormComponent } from './ramais-list-form/ramais-list-form.component';
import { RamaisListComponent } from './ramais/ramais.component';

const routes: Routes = [
  { path: '', component: RamaisListComponent },
  { path: 'new', component: RamaisListFormComponent, resolve:  {ramais: RamaisResolver} },
  { path: 'edit/:id', component: RamaisListFormComponent, resolve:  {ramais: RamaisResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RamaisListRoutingModule {

}
