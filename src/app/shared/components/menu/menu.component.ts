import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
        {
            label: 'Pipes de Angular',
            icon: 'pi pi-desktop',
            items:
            [
              {
                label: 'Textos y fechas',
                icon: ' pi pi-align-left',
                routerLink: '/'
              },
              {
                label: 'Números',
                icon: ' pi pi-dollar',
                routerLink: 'numbers'  /* Estee nombre está en el routing de productos y la carga perezosa en el app routing */
              },
              {
                label: 'No comunes',
                icon: ' pi pi-globe',
                routerLink: 'uncommon'
              },
            ]
        },
        {
          label: 'Pipes Personalizados',
          icon: 'pi pi-cog',
          items:[
            {
              label: 'Otros Elemento',
              icon: 'pi pi-cog',
            }
          ]
        }
    ];
}

}
