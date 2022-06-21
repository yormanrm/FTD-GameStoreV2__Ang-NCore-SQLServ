import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { SharedModule } from '../core/shared/shared.module';
import { byPlatformPipe } from './pipes/byPlatform.pipe';
import { WidgetCategoryComponent } from './components/home/components/widget-category/widget-category.component';


@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    ProductsComponent,
    ViewProductComponent,
    byPlatformPipe,
    WidgetCategoryComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ],
  exports: [],
  providers: []
})



export class PublicModule { }
