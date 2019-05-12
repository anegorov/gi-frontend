import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }
  
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            // {label: 'Новый', icon: 'pi pi-fw pi-plus', routerLink: "/new.html"},
            {label: 'Главная', icon: 'pi pi-fw pi-home', routerLink: "/main.html"},
            {label: 'Каталог', icon: 'pi pi-fw pi-inbox', routerLink: "/catalog.html"},
            {label: 'Контакты', icon: 'pi pi-fw pi-info', routerLink: "/contact.html"}
            // {label: 'Мебель', icon: 'pi pi-fw pi-download',routerLink: ["/catalog.html", {type: 'игрушка'}]},
            // {label: 'Игрушки', icon: 'pi pi-fw pi-refresh',routerLink: ["/catalog.html", {type: 'мебель'}]}
        ];
    }
  

}
