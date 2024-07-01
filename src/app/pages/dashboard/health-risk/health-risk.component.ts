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

      let heading = '.section-health-risk .section-title, .section-health-risk .section-description';
      gsap.from(heading,{
        opacity: 0,
        x:100,
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: heading,
          start: "top 60%",
          end: "top 40%",
          scrub: true,
        }
      })


      let girlsSections = '.section-health-risk .wrapper.desktop-block, .section-health-risk .wrapper.mobile-block';

      gsap.from(girlsSections, {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: '.section-health-risk .wrapper.desktop-block',
          scroller: 'body',
          start: "top 60%",
          end: "top 40%",
          scrub: true,
          markers: false
        }
      })
  }
}
