import { Component, Input } from '@angular/core';

@Component({
  selector: 'polaris-annotated-section',
  templateUrl: './annotated-section.component.html'
})
export class NgxShopifyPolarisAnnotatedSectionComponent {
  @Input() heading: string;
  @Input() description: string;

  constructor() { }
}
