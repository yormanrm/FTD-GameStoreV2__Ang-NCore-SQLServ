import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/admin/services/products/products.service';
import { Products } from 'src/app/core/shared/models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Products | any;

  constructor(private _productsService:ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this._productsService.getProducts().subscribe(data => this.products = data)
  }
  ImgPath(serverPath: string){
    return `https://localhost:44341/${serverPath}`;
  }



}
