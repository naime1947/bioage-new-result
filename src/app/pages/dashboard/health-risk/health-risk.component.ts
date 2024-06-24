import { AfterViewInit, Component, Input } from '@angular/core';
import { AssessmentResultModel } from '../../../models/assessment-result.model';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


@Component({
  selector: 'app-health-risk',
  standalone: true,
  imports: [],
  templateUrl: './health-risk.component.html',
  styleUrl: './health-risk.component.scss'
})
export class HealthRiskComponent implements AfterViewInit{
  @Input() latestAssessmentResult!: AssessmentResultModel;

  ngAfterViewInit(): void {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from('.section-health-risk .section-title', {
        opacity: 0,
        y:-50,
        duration: 1,
        scrollTrigger: {
          trigger: '.section-health-risk .section-description',
          scroller: 'body',
          start: "top 90%",
          end: "top 50%",
          scrub: true,
          markers: false
        }
      })

      gsap.from('.section-health-risk .section-description', {
        opacity: 0,
        y:50,
        duration: 1,
        scrollTrigger: {
          trigger: '.section-health-risk .section-description',
          scroller: 'body',
          start: "top 90%",
          end: "top 50%",
          scrub: true,
          markers: false
        }
      })

      gsap.from('.section-health-risk .wrapper.desktop-block', {
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: '.section-health-risk .wrapper.desktop-block',
          scroller: 'body',
          start: "top 90%",
          end: "top 50%",
          scrub: true,
          markers: false
        }
      })

      gsap.from('.section-health-risk .wrapper.mobile-block', {
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: '.section-health-risk .wrapper.mobile-block',
          scroller: 'body',
          start: "top 90%",
          end: "top 50%",
          scrub: true,
          markers: false
        }
      })

  }
}
