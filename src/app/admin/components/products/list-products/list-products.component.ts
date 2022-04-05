import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy} from '@angular/core';


import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


import { Products } from 'src/app/core/shared/models/products.model';

import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/admin/services/products/products.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'quantity', 'state', 'platform', 'category', 'image', 'actions'];
  dataSource = new MatTableDataSource<Products>();
  suscription !: Subscription;

  constructor(private _toastr:ToastrService, private _productsService : ProductsService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.viewProducts()
  }

  ngOnDestroy(): void {
    console.log("Destroy List Products Component")
  }

  viewProducts(){
    this.suscription = this._productsService.getProducts().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    },
    error =>{
       console.log(error)
    })
  }

  ImgPath(serverPath: string){
    return `https://localhost:44341/${serverPath}`;
  }

  updateProduct(){

  }

  deleteProduct(){
    this._toastr.error('El Producto Ha Sido Eliminado Correctamente', 'Producto Eliminado');
  }

}
