import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from '../core/shared/shared.module';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ListProductsComponent } from './products/list-products/list-products.component';


@NgModule({
  declarations: [
    AdminComponent,
    ProductsComponent,
    AddProductComponent,
    ListProductsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  exports: [],
  providers: []
})



export class AdminModule { }
