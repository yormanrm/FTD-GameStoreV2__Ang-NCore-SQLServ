import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '../core/shared/shared.module';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { UploadImageComponent } from './components/products/add-product/components/upload-image/upload-image.component';


@NgModule({
  declarations: [
    AdminComponent,
    ProductsComponent,
    AddProductComponent,
    ListProductsComponent,
    UploadImageComponent
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
