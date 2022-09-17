import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButtonGroupComponent)
    }
  ]
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {
  @Input() public value: string = null;
  @Input() public label = '';
  public options = YesNoButtonGroupOptions;
  @Output() public valueChange = new EventEmitter<string>();
  private onChange = (value: string) => {};
  private onTouched = () => {};
  public id: string;

  constructor(private uniqueIdService: UniqueIdService) {
    this.id = uniqueIdService.generateUniqueIdWithPrefix('yes-no-button-group');
   }

  ngOnInit(): void {
  }

  writeValue(value: string): void {
    this.value = value;
    this.onChange(value);
    this.valueChange.emit(this.value);
  }
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }


  public setActivate(value: string): void {
    this.writeValue(value);
  }

  public getActivate(value: string): boolean {
    return this.value === value ? true : false;
  }

}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no'
}
