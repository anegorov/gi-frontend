import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';

import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { NewComponent } from './new/new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FieldsetModule} from 'primeng/fieldset';
import {TabViewModule} from 'primeng/tabview';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { NgxGalleryModule } from 'ngx-gallery';
import { GalleryComponent } from './gallery/gallery.component';
import {AngularStickyThingsModule} from '@w11k/angular-sticky-things';
import {TabMenuModule} from 'primeng/tabmenu';
import { HelloComponent } from './hello/hello.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { ArticleComponent } from './pages/article/article.component';
import { HttpService } from './http.service';
import { ArticleService } from './services/article.service';
import { PImageComponent } from './control/p-image/p-image.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListComponent,
    ItemComponent,
    NewComponent,
    GalleryComponent,
    HelloComponent,
    MainComponent,
    ContactComponent,
    ArticleComponent,
    PImageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    MenuModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FieldsetModule,
    TabViewModule,
    BreadcrumbModule,
    NgxGalleryModule,
    AngularStickyThingsModule,
    TabMenuModule
  ],
  providers: [
    HttpService,
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
