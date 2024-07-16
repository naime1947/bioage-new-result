import { trigger, transition, style, animate } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { heartBeat, flipInX, slideInLeft } from '../../../shared/animation';
import { CommonModule } from '@angular/common';
import { HeartComponent } from './heart/heart.component';
import gsap from 'gsap';


@Component({
  selector: 'app-age-gap-banner',
  standalone: true,
  imports: [CommonModule, HeartComponent],
  templateUrl: './age-gap-banner.component.html',
  styleUrl: './age-gap-banner.component.scss',
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
    trigger(`flyInUp`, [
      transition('void => *', [
        style({ opacity: 0, transform: `translateY(50%)` }),
        animate(
          `600ms 200ms ease-in`,
          style({ opacity: 1, transform: `translateY(0%)` })
        ),
      ]),
    ]),
    heartBeat(1300, 1500),
    flipInX(1000, 100),
    slideInLeft(1000, 100),
  ],
})
export class AgeGapBannerComponent implements OnInit, OnChanges, AfterViewInit {
  description =
    'Research has shown a 5 year difference between BioAge and chronological age is associated with an increased risk of conditions like cardiovascular disease';
  @Input() yourAge!: number;
  @Input() yourBioAge!: number;

  ageDifference!: number;
  ageDifferenceAbs!: number;

  ngOnInit(): void {
    this.setAgeDifference();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.setAgeDifference();
  }
  setAgeDifference() {
    this.ageDifference = this.yourBioAge - this.yourAge;
    this.ageDifferenceAbs = Math.abs(this.ageDifference);
    this.ageDifferenceAbs =
      this.ageDifferenceAbs > 5 ? 5 : this.ageDifferenceAbs;
  }

  ngAfterViewInit(): void {
    // let tl = gsap.timeline();

    // for(let i=1; i<=6; i++){
    //   tl.from(`.brick.bg-${i}` , {
    //     x: -50,
    //     skewY: -20,
    //     opacity: 0,
    //     duration: 0.2,
    //   })
    // }


    // gsap.from('.summary', {
    //   x: -200,
    //   opacity: 0,
    //   duration: 1.5,
    //   ease: "power1.inOut"
    // })

    // gsap.from('.description', {
    //   x: 200,
    //   opacity: 0,
    //   duration: 1.5,
    //   ease: "power1.inOut"
    // })
  }


}
