import { PageComponent } from './page/page.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from 'data-table/data-table.component';

export * from './page/page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageComponent,
    DataTableComponent,
  ],
  exports: [
    PageComponent,
    DataTableComponent,
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
