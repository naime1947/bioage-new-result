import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-girl-svg',
  standalone: true,
  imports: [],
  templateUrl: './girl-svg.component.html',
  styleUrl: './girl-svg.component.scss'
})
export class GirlSvgComponent {
  @Input() color = '#ef3e2d';
  @Input() width = 83;

  getHeight(){
    return this.width * 2.07;
  }
}
