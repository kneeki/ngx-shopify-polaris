import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxShopifyPolarisAnnotatedSectionComponent } from './annotated-section/annotated-section.component';
import { NgxShopifyPolarisPageComponent } from './page/page.component';
import { NgxShopifyPolarisDataTableComponent } from './data-table/data-table.component';
import { NgxShopifyPolarisButtonComponent } from './button/button.component';
import { NgxShopifyPolarisTextBoxComponent } from './text-box/text-box.component';
import { NgxShopifyPolarisSelectComponent } from './select/select.component';
import { NgxShopifyPolarisSpinnerComponent } from './spinner/spinner.component';
import { NgxShopifyPolarisDisplayTextComponent } from './display-text/display-text.component';

export * from './page/page.component';
export * from './data-table/data-table.component';
export * from './annotated-section/annotated-section.component';
export * from './button/button.component';
export * from './text-box/text-box.component';
export * from './select/select.component';
export * from './spinner/spinner.component';
export * from './display-text/display-text.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NgxShopifyPolarisPageComponent,
    NgxShopifyPolarisDataTableComponent,
    NgxShopifyPolarisAnnotatedSectionComponent,
    NgxShopifyPolarisButtonComponent,
    NgxShopifyPolarisTextBoxComponent,
    NgxShopifyPolarisSelectComponent,
    NgxShopifyPolarisSpinnerComponent,
    NgxShopifyPolarisDisplayTextComponent
  ],
  exports: [
    NgxShopifyPolarisPageComponent,
    NgxShopifyPolarisDataTableComponent,
    NgxShopifyPolarisAnnotatedSectionComponent,
    NgxShopifyPolarisButtonComponent,
    NgxShopifyPolarisTextBoxComponent,
    NgxShopifyPolarisSelectComponent,
    NgxShopifyPolarisSpinnerComponent,
    NgxShopifyPolarisDisplayTextComponent
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
