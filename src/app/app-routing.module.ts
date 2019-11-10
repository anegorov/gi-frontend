import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListComponent} from './list/list.component';
import {NewComponent} from './new/new.component';
import {ItemComponent} from './item/item.component';
import {MainComponent} from './main/main.component';
import {ContactComponent} from './contact/contact.component';
import {ArticleComponent} from './pages/article/article.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main.html', component: MainComponent },
  { path: 'catalog.html', component: ListComponent },
  { path: 'contact.html', component: ContactComponent },
  { path: 'article.html', component: ArticleComponent },
  { path: 'new.html', component: NewComponent },
  { path: ':link', component: ItemComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
