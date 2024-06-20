import { AfterViewInit, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { sortAssessment } from '../../shared/utilities/utils';
import { AssessmentResultModel } from '../../models/assessment-result.model';
import { MyResultService } from '../../services/my-result.service';
import { AgeGapBannerComponent } from './age-gap-banner/age-gap-banner.component';
import { HealthRiskComponent } from './health-risk/health-risk.component';
import { WhatThisMeanComponent } from './what-this-mean/what-this-mean.component';
import { CompareToOthersComponent } from './compare-to-others/compare-to-others.component';
import { JournalComponent } from './journal/journal.component';
import { WellnessExamComponent } from './wellness-exam/wellness-exam.component';
import { ImproveBioageComponent } from './improve-bioage/improve-bioage.component';
import { NextBioageComponent } from './next-bioage/next-bioage.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { slideInLeft, slideInRight } from '../../shared/animation';
import { HowVideoComponent } from './how-video/how-video.component';
import { LearnHowComponent } from './learn-how/learn-how.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AgeGapBannerComponent,
    HealthRiskComponent,
    WhatThisMeanComponent,
    CompareToOthersComponent,
    JournalComponent,
    WellnessExamComponent,
    ImproveBioageComponent,
    NextBioageComponent,
    HowVideoComponent,
    LearnHowComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements AfterViewInit {
  user: UserModel | null;
  latestAssessmentResult!: AssessmentResultModel;
  result: any;

  constructor(
    private authService: AuthService,
    private titleService: Title,
    private myResultService: MyResultService
  ) {
    this.user = this.authService.getUser();

    this.myResultService.assessmentResults$.pipe().subscribe((data) => {
      if (data && data.length) {
        sortAssessment(data, 'new');
        this.latestAssessmentResult = data[0];
      }
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle('Dashbaord - BioAge');
    this.myResultService.getResults();

    // setInterval(()=> {
    //   this.yourBioAge = this.getRandomInt(49, 57)
    // }, 5000)
  }


  ngAfterViewInit(): void {

  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
