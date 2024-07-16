import { AfterViewInit, Component } from '@angular/core';
import { DesktopMenuComponent } from './desktop-menu/desktop-menu.component';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { LanguageSwitcherComponent } from '../../shared/components/language-switcher/language-switcher.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import gsap from 'gsap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    DesktopMenuComponent,
    MobileMenuComponent,
    LanguageSwitcherComponent,
    RouterModule,
    BsDropdownModule,
    CollapseModule,
    PopoverModule,
    ModalModule,
    TooltipModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit{
  isCollapsed = true;
  constructor(private authService: AuthService) {}
  handleClick(dropdown: any) {
  }

  logout() {
    this.authService.logout();
  }

  ngAfterViewInit(): void {
      // gsap.from(".navbar-brand", {
      //   opacity: 0,
      //   y: -50,
      //   duration: 2,
      //   ease: "expo.inOut"
      // })
  }
}
