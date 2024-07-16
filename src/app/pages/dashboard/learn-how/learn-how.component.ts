import { Component, AfterViewInit } from '@angular/core';
import { BtnEnum } from './btn-enum';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-learn-how',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learn-how.component.html',
  styleUrl: './learn-how.component.scss',
})
export class LearnHowComponent implements AfterViewInit {
  btnEnum = BtnEnum;
  selectedBtn: BtnEnum = this.btnEnum.ImproveYourDiet;

  ngAfterViewInit(): void {
    // gsap.registerPlugin(ScrollTrigger);
    // gsap.from('', {

    // });
  }
}
