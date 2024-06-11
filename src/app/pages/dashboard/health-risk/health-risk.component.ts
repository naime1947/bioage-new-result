import { Component, Input } from '@angular/core';
import { AssessmentResultModel } from '../../../models/assessment-result.model';

@Component({
  selector: 'app-health-risk',
  standalone: true,
  imports: [],
  templateUrl: './health-risk.component.html',
  styleUrl: './health-risk.component.scss'
})
export class HealthRiskComponent {
  @Input() latestAssessmentResult!: AssessmentResultModel;
}
