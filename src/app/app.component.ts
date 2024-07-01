import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';
import { ScrollTopComponent } from './shared/components/scroll-top/scroll-top.component';
import gsap from 'gsap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScrollTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  constructor() {
    setTheme('bs5');
  }

  ngAfterViewInit() {

  }
}
