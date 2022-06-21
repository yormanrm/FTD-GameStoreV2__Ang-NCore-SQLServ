import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '../core/shared/shared.module';
import { MailComponent } from './components/mail/mail.component';


@NgModule({
  declarations: [
    AdminComponent,
    ProductsComponent,
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
