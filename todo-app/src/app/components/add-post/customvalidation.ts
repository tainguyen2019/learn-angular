import {FormControl} from '@angular/forms';

export const yearValidation = (
  control: FormControl
) => {
  return control.value < 1999 ? { isError: true } : null;
};
