import { Component, Input } from '@angular/core';

@Component({
  selector: 'polaris-spinner',
  templateUrl: './spinner.component.html'
})
export class NgxShopifyPolarisSpinnerComponent {
  @Input() width = '20px';
  @Input() height = '20px';

  constructor() { }
}
