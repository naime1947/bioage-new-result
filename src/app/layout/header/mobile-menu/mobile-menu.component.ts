import { Component } from '@angular/core';
import { MenuItemsComponent } from '../menu-items/menu-items.component';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [MenuItemsComponent],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent {

}
