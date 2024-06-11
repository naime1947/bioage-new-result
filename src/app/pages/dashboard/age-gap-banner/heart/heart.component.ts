import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { heartBeat } from '../../../../shared/animation';

@Component({
  selector: 'app-heart',
  standalone: true,
  imports: [],
  templateUrl: './heart.component.html',
  styleUrl: './heart.component.scss',
  animations: [
    trigger(`flyInDown`, [
      transition('void => *', [
        style({ opacity: 0, transform: `translateY(-50%)` }),
        animate(
          `600ms 200ms ease-in`,
          style({ opacity: 1, transform: `translateY(0%)` })
        ),
      ]),
    ]),
    heartBeat(1300, 2200)
  ],
})
export class HeartComponent {
  @Input() yourBioAge = 0;

}
