import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit, OnDestroy {

  addForm !: FormGroup;

  constructor(private fb: FormBuilder) { }

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
    console.log("Destroy Add Product Component")
  }

  AddProduct(){
    console.log(this.addForm.value)
  }

}
