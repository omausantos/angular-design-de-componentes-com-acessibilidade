import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss']
})
export class YesNoButtonGroupComponent implements OnInit {
  @Input() public value: string = null;
  @Input() public label = '';
  public options = YesNoButtonGroupOptions;
  @Output() public valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public setActivate(value: string): void {
    this.value = value;
    this.valueChange.emit(this.value);
  }

  public getActivate(value: string): boolean {
    return this.value === value ? true : false;
  }

}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no'
}
