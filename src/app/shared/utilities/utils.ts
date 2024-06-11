import { AssessmentResultModel } from "../../models/assessment-result.model";

export function sortAssessment(
  assessmentResults: AssessmentResultModel[],
  type: string
) {
  if (type === 'new') {
    assessmentResults.sort((a, b) => {
      var dateA = new Date(a.dateOfLatestImaging).getTime();
      var dateB = new Date(b.dateOfLatestImaging).getTime();
      return dateA < dateB ? 1 : -1;
    });
  } else {
    assessmentResults.sort((a, b) => {
      var dateA = new Date(a.dateOfLatestImaging).getTime();
      var dateB = new Date(b.dateOfLatestImaging).getTime();
      return dateA > dateB ? 1 : -1;
    });
  }
}
