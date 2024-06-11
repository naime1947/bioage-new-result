import { Component } from '@angular/core';
import { SignOutSvgComponent } from '../../../shared/svg-icons/sign-out-svg/sign-out-svg.component';
import { DashboardSvgComponent } from '../../../shared/svg-icons/dashboard-svg/dashboard-svg.component';
import { UserSvgComponent } from '../../../shared/svg-icons/user-svg/user-svg.component';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [SignOutSvgComponent, DashboardSvgComponent, UserSvgComponent, ],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.scss'
})
export class MenuItemsComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
