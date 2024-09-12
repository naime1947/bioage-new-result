import {
  LabelType,
  NgxSliderModule,
  Options,
} from '@angular-slider/ngx-slider';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { GirlSvgComponent } from './girl-svg/girl-svg.component';
import { CommonModule } from '@angular/common';
import { AssessmentResultModel } from '../../../models/assessment-result.model';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-compare-to-others',
  standalone: true,
  imports: [CommonModule, NgxSliderModule, GirlSvgComponent],
  templateUrl: './compare-to-others.component.html',
  styleUrl: './compare-to-others.component.scss',
})
export class CompareToOthersComponent implements OnInit, AfterViewInit {
  @Input() latestAssessmentResult!: AssessmentResultModel;

  options: Options = {
    floor: 1,
    ceil: 10,
    step: 1,
    readOnly: true,
    showTicks: true,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>You</b>';
        default:
          return '';
      }
    },
  };

  girlWidth = 83;
  selectedGirlWidth = this.girlWidth * 1.26;
  selectedGrilNum = 8;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.setGirlWidth(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.setGirlWidth(window.innerWidth);
    location.reload();
  }

  ngAfterViewInit(): void {
    // gsap.registerPlugin(ScrollTrigger);
    // let tl = gsap.timeline();
    // tl.from('.img-container', {
    //   scale: 0.8,
    //   opacity: 0,
    //   duration: 2,
    //   stagger: 1,
    //   ease: "back.inOut",
    //   scrollTrigger: {
    //     trigger: '.img-container',
    //     scroller: 'body',
    //     start: 'top 80%',
    //     end: 'top 40%',
    //     scrub: 1.5,
    //     markers: false,
    //   },
    // });
    // tl.from('.slider-wrapper', {
    //   opacity: 0,
    //   y: 20,
    //   duration: 1,
    //   ease: "back.inOut",
    //   scrollTrigger: {
    //     trigger: '.slider-wrapper',
    //     scroller: 'body',
    //     start: 'top 80%',
    //     end: 'top 50%',
    //     scrub: 2,
    //     markers: false,
    //   },
    // })
  }

  setGirlWidth(screenWidth: number) {
    console.log(innerWidth);
    if (screenWidth > 1390) {
      this.girlWidth = 83;
      this.selectedGirlWidth = this.girlWidth * 1.26;
    } else if (screenWidth < 1391 && screenWidth > 1190) {
      this.girlWidth = 74;
      this.selectedGirlWidth = this.girlWidth * 1.26;
    } else if (screenWidth < 1191 && screenWidth > 990) {
      this.girlWidth = 60;
      this.selectedGirlWidth = this.girlWidth * 1.26;
    } else if (screenWidth < 992 && screenWidth > 574) {
      this.girlWidth = 48;
      this.selectedGirlWidth = this.girlWidth * 1.26;
    } else {
      this.girlWidth = 23;
      this.selectedGirlWidth = this.girlWidth * 1.26;
    }
  }
}
