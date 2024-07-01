import { AfterViewInit, Component, Input } from '@angular/core';
import { AssessmentResultModel } from '../../../models/assessment-result.model';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


@Component({
  selector: 'app-what-this-mean',
  standalone: true,
  imports: [],
  templateUrl: './what-this-mean.component.html',
  styleUrl: './what-this-mean.component.scss'
})
export class WhatThisMeanComponent implements AfterViewInit {
  @Input() latestAssessmentResult!: AssessmentResultModel;


  ngAfterViewInit(): void {
      gsap.registerPlugin(ScrollTrigger);

      let tl = gsap.timeline();
      tl.from('.circle.first', {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: ".each-info-circle .circle",
          start: "top 60%",
          end: "top 40%",
          scrub: true,
          markers: false
        }
      })

      tl.from('.circle.selected', {
        scale: 0.5,
        opacity: 0,
        duration: 2,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: ".each-info-circle .circle",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
          markers: false
        }
      })

      tl.from('.circle.last', {
        x: 100,
        opacity: 0,
        duration: 2,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: ".each-info-circle .circle",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
          markers: false
        }
      })
  }
}
