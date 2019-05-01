import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListComponent} from './list/list.component';
import {NewComponent} from './new/new.component';
import {ItemComponent} from './item/item.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'main.html', component: ListComponent },
  { path: 'new.html', component: NewComponent },
  { path: ':link', component: ItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
