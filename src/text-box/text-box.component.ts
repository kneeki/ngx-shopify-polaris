import { Component, Input } from '@angular/core';

@Component({
  selector: 'polaris-text-box',
  templateUrl: './text-box.component.html'
})
export class NgxShopifyPolarisTextBoxComponent {
  @Input() heading: string;
  @Input() description: string;

  constructor() { }
}
