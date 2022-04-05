import { Component, Input, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription, window } from 'rxjs';
import { ProductsService } from 'src/app/admin/services/products/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit, OnDestroy {

  addForm !: FormGroup;

  @Input() formData: any

  public progress !: number;
  public message !: string;

  public response !: {dbPath: ''};

  suscription !: Subscription;

  /*public response !: {dbPath: ''};*/

  constructor(private fb: FormBuilder, private _productsService: ProductsService, private _toastr: ToastrService) {}

  ngOnInit(): void {
    this.addForm = this.fb.group({
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

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
    console.log("Destroy Add Product Component")
  }

  public uploadFinished(data : any){
    this.formData = data;
  }

  AddProduct(){
    this.suscription = this._productsService.uploadImage(this.formData).subscribe(res => {
      this.response = res;
      const newproduct: any = {
        name: this.addForm.get('name')?.value,
        price: this.addForm.get('price')?.value,
        quantity: this.addForm.get('quantity')?.value,
        state: this.addForm.get('state')?.value,
        platform: this.addForm.get('platform')?.value,
        category: this.addForm.get('category')?.value,
        description: this.addForm.get('description')?.value,
        image: this.response.dbPath
      };
      this.suscription = this._productsService.addProduct(newproduct).subscribe(res =>{
        this.reloadPage()
          .then(() => {
            this.Success()
          })
      })
    })
  }

  Success(){
    this._toastr.success('El Producto Fue Almacenado Con Éxito', 'Hecho!');
  }

  reloadPage()  : Promise<any>{
    history.go(0);
    return Promise.resolve(42);
  }

}
