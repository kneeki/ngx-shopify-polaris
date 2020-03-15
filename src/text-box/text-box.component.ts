import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'polaris-text-box',
  templateUrl: './text-box.component.html',
})
export class NgxShopifyPolarisTextBoxComponent {
  @Input() description: string;
  @Input() placeholder = '';

  @Output() onTextChange = new EventEmitter<string>(undefined);
  public input: string;

  constructor() { }
}
