import { AfterViewInit, Component, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { ToastrService } from 'ngx-toastr';

import { ProductsService } from '../../services/products/products.service';
import { Products } from 'src/app/core/shared/models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit{

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'quantity', 'state', 'platform', 'category', 'image', 'actions'];
  dataSource = new MatTableDataSource<Products>();

  productForm !: FormGroup;

  formData !: any

  imagePath !: any;

  public progress !: number;
  public message !: string;
  public onUploadFinished = new EventEmitter();
  public response !: {dbPath: ''};

  suscription !: Subscription;

  action = 'Agregar';

  id : number | undefined;

  constructor(private fb: FormBuilder, private _productsService: ProductsService, private _toastr: ToastrService) {}




  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      state: ['', Validators.required],
      platform: ['', Validators.required],
      category: ['', Validators.required],
      image: [''],
      description: ['', Validators.required],
    })
  }

  ngAfterViewInit() {
    this.viewProducts()
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
    console.log("Destroy Add Product Component")
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


  addProduct(){

    if(this.id == undefined){
      this.suscription = this._productsService.uploadImage(this.formData).subscribe(res => {
        this.response = res;
        const newproduct: any = {
          name: this.productForm.get('name')?.value,
          price: this.productForm.get('price')?.value,
          quantity: this.productForm.get('quantity')?.value,
          state: this.productForm.get('state')?.value,
          platform: this.productForm.get('platform')?.value,
          category: this.productForm.get('category')?.value,
          description: this.productForm.get('description')?.value,
          image: this.response.dbPath
        };
        this.suscription = this._productsService.addProduct(newproduct).subscribe(res =>{
          this._toastr.success('El Producto Fue Almacenado Con Éxito', 'Hecho');
          this.viewProducts();
          this.productForm.reset();
        })
      })
    }
    else{

      const modproduct: any = {
        name: this.productForm.get('name')?.value,
        price: this.productForm.get('price')?.value,
        quantity: this.productForm.get('quantity')?.value,
        state: this.productForm.get('state')?.value,
        platform: this.productForm.get('platform')?.value,
        category: this.productForm.get('category')?.value,
        description: this.productForm.get('description')?.value,
        image: this.response.dbPath
      };

      modproduct.id = this.id;
      this.suscription = this._productsService.updateProduct(this.id, modproduct).subscribe(data => {
        this.productForm.reset();
        this.action = 'Agregar';
        this.id  = undefined;
        this._toastr.info('Producto Actualizado', 'Hecho');
        this.viewProducts();
      },
      error => {
        this._toastr.error('Ocurrio Un Error', 'Opss!');
        console.log(error);
      })
    }

  }


  updateProduct(product:any){
    this.action = 'Editar';
    this.id = product.id;
    this.productForm.patchValue({
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      state: product.state,
      platform: product.platform,
      category: product.category,
      description: product.description,
    })
    this.imagePath = `https://localhost:44341/${product.image}`;
  }


  deleteProduct(id: number){
    this.suscription = this._productsService.deleteProduct(id).subscribe(data =>{
      this._toastr.success('El Producto Fue Eliminado', 'Hecho');
      this.viewProducts();
    },
    error => {
      this._toastr.error('Ocurrio Un Error', 'Opss!');
      console.log(error)
    })
  }



  public uploadFile = (files : any) => {
    if (files.length === 0) {
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imagePath = reader.result;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.uploadFinished(formData);
  }

  ImgPath(serverPath: string){
    return `https://localhost:44341/${serverPath}`;
  }
  uploadFinished(data : any){
    this.formData = data;
  }




  closeOffcanvas(){
    this.productForm.reset();
    this.id  = undefined;
    this.action = 'Agregar';
    this.imagePath = null;
  }

}
