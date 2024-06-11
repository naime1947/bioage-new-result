import { Injectable } from '@angular/core';
import { AssessmentResultModel } from './../models/assessment-result.model';
import { Observable, Subject, filter, find, of } from 'rxjs';
import { UserModel } from '../models/user.model';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class MyResultService {
  user!: UserModel;
  private assessmentResults!: AssessmentResultModel[];
  private assesmentResultsSub = new Subject<AssessmentResultModel[]>();
  assessmentResults$ = this.assesmentResultsSub.asObservable();

  constructor(private authService: AuthService) {}

  getResults() {
    this.assessmentResults = data;
    this.assesmentResultsSub.next(this.assessmentResults);
  }

  getResultById(
    assessmentId: string
  ): Observable<AssessmentResultModel | undefined> {
    const result = data.find((x) => x.id == assessmentId);
    return of(result);
  }
}

const data = [
  {
    id: '1',
    name: 'BioAge Assessment',
    dateOfLatestImaging: new Date('2015-03-25'),
    nextAssessmentDate: new Date('2023-09-16T12:00:00Z'),
    choronologicalAge: 51,
    biologicalAge: 38,
    healtRisk: {
      yourAge: {
        cardiovascular: 4.6,
        chronicKideny: 5.2,
        highBloodPressure: 4,
      },
      yourBioAge: {
        cardiovascular: 9,
        chronicKideny: 25,
        highBloodPressure: 12,
      },
    },
  },
  {
    id: '2',
    name: 'BioAge Assessment',
    dateOfLatestImaging: new Date('2015-01-26'),
    nextAssessmentDate: new Date('2023-09-16T12:00:00Z'),
    choronologicalAge: 51,
    biologicalAge: 68,
    healtRisk: {
      yourAge: {
        cardiovascular: 4.6,
        chronicKideny: 5.2,
        highBloodPressure: 4,
      },
      yourBioAge: {
        cardiovascular: 9,
        chronicKideny: 25,
        highBloodPressure: 12,
      },
    },
  },
  {
    id: '3',
    name: 'BioAge Assessment',
    dateOfLatestImaging: new Date('2015-02-27'),
    nextAssessmentDate: new Date('2023-09-16T12:00:00Z'),
    choronologicalAge: 51,
    biologicalAge: 68,
    healtRisk: {
      yourAge: {
        cardiovascular: 4.6,
        chronicKideny: 5.2,
        highBloodPressure: 4,
      },
      yourBioAge: {
        cardiovascular: 9,
        chronicKideny: 25,
        highBloodPressure: 12,
      },
    },
  },
  {
    id: '4',
    name: 'BioAge Assessment',
    dateOfLatestImaging: new Date('2015-04-05'),
    nextAssessmentDate: new Date('2023-09-16T12:00:00Z'),
    choronologicalAge: 51,
    biologicalAge: 68,
    healtRisk: {
      yourAge: {
        cardiovascular: 4.6,
        chronicKideny: 5.2,
        highBloodPressure: 4,
      },
      yourBioAge: {
        cardiovascular: 9,
        chronicKideny: 25,
        highBloodPressure: 12,
      },
    },
  },
  {
    id: '5',
    name: 'BioAge Assessment',
    dateOfLatestImaging: new Date('2015-01-25'),
    nextAssessmentDate: new Date('2023-09-16T12:00:00Z'),
    choronologicalAge: 51,
    biologicalAge: 68,
    healtRisk: {
      yourAge: {
        cardiovascular: 4.6,
        chronicKideny: 5.2,
        highBloodPressure: 4,
      },
      yourBioAge: {
        cardiovascular: 9,
        chronicKideny: 25,
        highBloodPressure: 12,
      },
    },
  },
];
