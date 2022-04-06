import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '../core/shared/shared.module';
import { MailComponent } from './components/mail/mail.component';
import { UploadImageComponent } from './components/products/components/upload-image/upload-image.component';


@NgModule({
  declarations: [
    AdminComponent,
    ProductsComponent,
    UploadImageComponent,
    MailComponent
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
