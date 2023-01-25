import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RamaisListComponent } from './ramais-list/ramais-list.component';

const routes: Routes = [
  { path: '', component: RamaisListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RamaisListRoutingModule {

}
