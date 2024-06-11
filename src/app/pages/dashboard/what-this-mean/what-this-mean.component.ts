import { Component, Input } from '@angular/core';
import { AssessmentResultModel } from '../../../models/assessment-result.model';

@Component({
  selector: 'app-what-this-mean',
  standalone: true,
  imports: [],
  templateUrl: './what-this-mean.component.html',
  styleUrl: './what-this-mean.component.scss'
})
export class WhatThisMeanComponent {
  @Input() latestAssessmentResult!: AssessmentResultModel;
}
