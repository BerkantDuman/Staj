import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PriceComponent } from './price/price.component';
import { DetailComponent } from './detail/detail.component';
import { PeoplelistComponent } from './peoplelist/peoplelist.component';

const routes: Routes = [
  { path: '', component: PriceComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'list', component: PeoplelistComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
