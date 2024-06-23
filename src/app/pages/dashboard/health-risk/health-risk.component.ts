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

      gsap.from('.section-health-risk', {
        opacity: 0,
        //scale: 2,
        scaleX: "2",
        duration: 2,
        scrollTrigger: {
          trigger: '.section-health-risk',
          scroller: 'body',
          start: "top 80%",
          end: "top 50%",
          scrub: true,
          markers: true
        }
      })

      gsap.from('.section-health-risk .td-girl', {
        y: -50,
        //opacity: 0,
        //scale: 5,
        duration: 2,
        paused: false,
        scrollTrigger: {
          trigger: '.section-health-risk .td-girl',
          scroller: 'body',
          start: "top 80%",
          end: "top 40%",
          scrub: true,
          markers: false
        }
      });
  }
}
