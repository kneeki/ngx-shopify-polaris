import { Component, Input } from '@angular/core';

@Component({
  selector: 'polaris-button',
  templateUrl: './button.component.html'
})
export class NgxShopifyPolarisButtonComponent {
  @Input() button_text: string;
  constructor() { }
}
