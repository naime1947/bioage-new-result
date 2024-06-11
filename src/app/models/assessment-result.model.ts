export interface AssessmentResultModel {
  id: string;
  name: string;
  dateOfLatestImaging: Date;
  nextAssessmentDate: Date;
  choronologicalAge: number;
  biologicalAge: number;
  healtRisk: HealtRisk;
}

export interface HealtRisk{
  yourAge: HealtRiskData;
  yourBioAge: HealtRiskData;
}
export interface HealtRiskData{
  cardiovascular: number;
  chronicKideny: number;
  highBloodPressure: number;
}
