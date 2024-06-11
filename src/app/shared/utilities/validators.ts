import { AbstractControl } from '@angular/forms';

export function createCompareValidator(
  controlOne: AbstractControl,
  controlTwo: AbstractControl
) {
  return () => {
    if (!controlOne.value || !controlTwo.value) {
      return null;
    }
    if (controlOne.value !== controlTwo.value) {
      return { matchError: 'Value does not match' };
    }

    return null;
  };
}
