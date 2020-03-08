import { Component, Input } from '@angular/core';

@Component({
  selector: 'polaris-page',
  templateUrl: './page.component.html'
})
export class PageComponent {
  @Input() title: string;

  constructor() {}
}
