import { Component, Input } from '@angular/core';

@Component({
  selector: 'polaris-page',
  templateUrl: './page.component.html'
})
export class NgxShopifyPolarisPageComponent {
  @Input() title: string;

  constructor() {}
}
