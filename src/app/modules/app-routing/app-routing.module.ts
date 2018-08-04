import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectPoliceForceComponent } from '../../containers/select-police-force/select-police-force.component';

export const routes: Routes = [
  { path: '', component: SelectPoliceForceComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
