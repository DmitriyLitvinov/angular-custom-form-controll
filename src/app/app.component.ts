import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';


export const contactValidator = (control: AbstractControl): { [key: string]: string } => {
  const {value} = control;
  const keys: string[] = Object.keys(value);
  const phoneType = CONTACTS.PHONE;
  const emailType = CONTACTS.EMAIL;
  let regexp;
  let expectedVal = '';
  let errorObj: { [key: string]: string } = {};

  if (keys.includes(phoneType)) {
    regexp = new RegExp(APP_REGEXP.PHONE);
    expectedVal = value[phoneType];
    errorObj = {phone: 'Invalid phone number. Valid Format +99(999) 99-99-999'};
  } else if (keys.includes(emailType)) {
    regexp = new RegExp(APP_REGEXP.EMAIL);
    expectedVal = value[emailType];
    errorObj = {email: 'Invalid email. Valid Format example.email@example.com'};
  }

  if (!expectedVal.length) {
    return {contactRequired: 'Value can not be empty'};
  }

  const isValid = regexp.test(expectedVal);
  return isValid ? null : errorObj;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  contactTypes: ContactTypesInterface[] = [
    {
      value: CONTACTS.EMAIL,
      label: 'Email'
    },
    {
      value: CONTACTS.PHONE,
      label: 'Phone'
    }
  ];

  defaultContactValue: ContactInterface = {phone: '+38(999) 99-99-999'};

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      contact: new FormControl(this.defaultContactValue, [contactValidator])
    });

  }

  getErrorText(controllName: string): string {
    const controllErrors = this.form.get(controllName).errors;

    if (controllErrors.contactRequired) {
      return controllErrors.contactRequired;
    }

    if (controllErrors.email) {
      return controllErrors.email;
    }

    if (controllErrors.phone) {
      return controllErrors.phone;
    }

    return '';
  }
}
