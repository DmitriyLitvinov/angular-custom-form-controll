import { Component, forwardRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-contact-element-form',
  templateUrl: './contact-element-form.component.html',
  styleUrls: ['./contact-element-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ContactElementFormComponent),
      multi: true
    },
  ]
})
export class ContactElementFormComponent implements OnChanges, ControlValueAccessor {
  @Input() contactTypes: ContactTypesInterface[] = [];
  @Input() defaultValue: ContactInterface;
  selectedType: CONTACT_TYPES;
  fieldValue = '';
  controllValue: {
    [key: string]: string
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.defaultValue && changes.defaultValue.currentValue) {
      this.selectedType = Object.keys(this.defaultValue)[0] as CONTACT_TYPES;
      this.fieldValue = this.defaultValue[this.selectedType];
      console.log('changes', this.selectedType);
    }
  }

  setInputValue(evt): void {
    this.fieldValue = evt.target.value;
    this.setValue();
  }

  setValue(): void {
    this.writeValue();
    this.onTouched();
  }

  onChange: any = () => {};

  onTouched = () => {};

  writeValue(): void {
    if (!this.selectedType || typeof this.selectedType !== 'string' || typeof this.fieldValue !== 'string') {
      return;
    }

    this.controllValue = {
      [this.selectedType]: this.fieldValue
    };

    this.onChange(this.controllValue);
  }


  registerOnChange(fn): void {
    console.log(fn);
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
