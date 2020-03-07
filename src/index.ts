import { PageComponent } from './page/page.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

export * from './page/page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageComponent,
  ],
  exports: [
    PageComponent,
  ]
})
export class NgxShopifyPolarisModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxShopifyPolarisModule,
      providers: []
    };
  }
}
