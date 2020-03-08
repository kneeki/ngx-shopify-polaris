import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'polaris-select',
  templateUrl: './select.component.html'
})
export class NgxShopifyPolarisSelectComponent {
  @Input() default: string;
  @Input() description: string;
  @Input() items = [];

  @Output() onSelect = new EventEmitter<string>(undefined);
  public input: string;

  constructor() { }
}
