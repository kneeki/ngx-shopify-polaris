import { Component, Input } from '@angular/core';

@Component({
  selector: 'polaris-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  @Input() title: string;

  constructor() {}
}
