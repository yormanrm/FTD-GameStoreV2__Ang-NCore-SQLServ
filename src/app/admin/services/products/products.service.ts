import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private appURL = 'https://localhost:44341/';
  private apiProductsURL = 'api/Products/'
  private apiProductsImagesURL = 'api/ProductsImages/'
  private apiUpdateImageURL = 'api/UpdateImage/'


  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{
    return this.http.get(this.appURL + this.apiProductsURL)
  }
  addProduct(product:any): Observable<any>{
    return this.http.post(this.appURL + this.apiProductsURL, product)
  }
  uploadImage(image:any): Observable<any>{
    return this.http.post(this.appURL + this.apiProductsImagesURL, image)
  }
  deleteProduct(id:number): Observable<any>{
    return this.http.delete(this.appURL + this.apiProductsURL + id)
  }
  updateProduct(id:number, product:any): Observable<any>{
    return this.http.put(this.appURL + this.apiProductsURL  + id, product)
  }
  cleanImage(id:any): Observable<any>{
    return this.http.delete(this.appURL + this.apiUpdateImageURL  + id)
  }

}
