import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../containers/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
