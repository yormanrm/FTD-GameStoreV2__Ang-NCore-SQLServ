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
  displayedColumns: string[] = ['ID', 'name', 'description', 'price', 'quantity', 'state', 'platform', 'subplatform',  'category', 'image', 'actions'];
  dataSource = new MatTableDataSource<Products>();

  productForm !: FormGroup; //formulario principal

  imgData !: any // informacion del file tipo imagen a cargar
  imagePath !: any; //ruta de la imagen
  currentImgPath !: any;
  public response !: {dbPath: ''}; //ruta de la imagen a usar en el subscribe a la db

  action = 'Agregar';
  id : number | undefined; //id para hacer update

  public progress !: number;
  public message !: string;

  suscription !: Subscription;

  platformselect : string | undefined;


  constructor(private fb: FormBuilder, private _productsService: ProductsService, private _toastr: ToastrService) {}




  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      state: ['', Validators.required],
      platform: ['', Validators.required],
      subplatform: ['', Validators.required],
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



  /*Metodos CRUD para los productos*/
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
      this.suscription = this._productsService.uploadImage(this.imgData).subscribe(res => {
        this.response = res;
        const newproduct: any = {
          name: this.productForm.get('name')?.value,
          price: this.productForm.get('price')?.value,
          quantity: this.productForm.get('quantity')?.value,
          state: this.productForm.get('state')?.value,
          platform: this.productForm.get('platform')?.value,
          subplatform: this.productForm.get('subplatform')?.value,
          category: this.productForm.get('category')?.value,
          description: this.productForm.get('description')?.value,
          image: this.response.dbPath
        };
        this.suscription = this._productsService.addProduct(newproduct).subscribe(res =>{
          this._toastr.success('El Producto Fue Almacenado Con Éxito', 'Hecho');
          this.viewProducts();
          this.platformselect = undefined;
          this.imagePath = null;
          this.productForm.reset();
        })
      }, error => {
          this._toastr.error('Ocurrio Un Error', 'Opss!');
          console.log(error);
        })
    }
    else{

      const modproduct: any = {
        name: this.productForm.get('name')?.value,
        price: this.productForm.get('price')?.value,
        quantity: this.productForm.get('quantity')?.value,
        state: this.productForm.get('state')?.value,
        platform: this.productForm.get('platform')?.value,
        subplatform: this.productForm.get('subplatform')?.value,
        category: this.productForm.get('category')?.value,
        description: this.productForm.get('description')?.value,
        image: this.currentImgPath
      };

      modproduct.id = this.id;

      this.suscription = this._productsService.updateProduct(this.id, modproduct).subscribe(data => {
        this.productForm.reset();
        this.action = 'Agregar';
        this.id  = undefined;
        this.platformselect = undefined;
        this.imagePath = null;
        this._toastr.info('Producto Actualizado', 'Hecho');
        this.viewProducts();

        this.suscription = this._productsService.uploadImage(this.imgData).subscribe()

      }, error => {
          this._toastr.error('Ocurrio Un Error', 'Opss!');
          console.log(error);
        });
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
      subplatform: product.subplatform,
      category: product.category,
      description: product.description,
    })
    this.currentImgPath = product.image;
    this.platformselect = product.platform,
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


  /*Metodos Para Las Imagenes*/
  public uploadFile(files : any){
    if (files.length === 0) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imagePath = reader.result;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.imgData = formData;
  }
  public updateFile(files : any){
    this.suscription = this._productsService.cleanImage(this.id).subscribe(res =>{
      if (files.length === 0) {
        return;
      }
      var reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        this.imagePath = reader.result;
      }
      let fileToUpload = <File>files[0];
      const path = "Resources\\Images\\Products\\";
      const formData = new FormData();
      formData.append('file', fileToUpload, fileToUpload.name);
      this.imgData = formData;
      this.currentImgPath = path + fileToUpload.name;
    }, error =>{
      this._toastr.error('Ocurrio Un Error', 'Opss!');
      console.log(error);
    });
  }
  ImgPath(serverPath: string){
    return `https://localhost:44341/${serverPath}`;
  }





  /*Metodo Para Cerrar Modal y Reinciar Formulario*/
  closeModal(){
    this.productForm.reset();
    this.id  = undefined;
    this.action = 'Agregar';
    this.imagePath = null;
    this.platformselect = undefined;
  }

  onPlatformClicked(event:any){ // Event Binding
    this.platformselect = event.target.value;
  }

}
