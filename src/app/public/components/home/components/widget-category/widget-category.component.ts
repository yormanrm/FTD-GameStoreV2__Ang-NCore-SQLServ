import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/admin/services/products/products.service';
import { Products } from 'src/app/core/shared/models/products.model';

@Component({
  selector: 'app-widget-category',
  templateUrl: './widget-category.component.html',
  styleUrls: ['./widget-category.component.scss']
})
export class WidgetCategoryComponent implements OnInit {

  @Input() plat: string | any;
  platform : string | any;
  products: Products | any;

  constructor(private _productsService:ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
    this.platform = this.plat;
  }

  getProducts(){
    this._productsService.getProducts().subscribe(data => this.products = data)
  }
  ImgPath(serverPath: string){
    return `https://localhost:44341/${serverPath}`;
  }
}
