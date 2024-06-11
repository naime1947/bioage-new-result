import { Component } from '@angular/core';
import { MenuItemsComponent } from '../menu-items/menu-items.component';
import { LanguageSwitcherComponent } from '../../../shared/components/language-switcher/language-switcher.component';

@Component({
  selector: 'app-desktop-menu',
  standalone: true,
  imports: [MenuItemsComponent, LanguageSwitcherComponent],
  templateUrl: './desktop-menu.component.html',
  styleUrl: './desktop-menu.component.scss'
})
export class DesktopMenuComponent {

}
