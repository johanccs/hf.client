import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProductType } from '../../models/products/createProductType';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = "https://localhost:5001/api/v1";

  constructor(private httpClient: HttpClient) { }

  getProducts(){
    const url = `${this.apiUrl}/products`;

    return this.httpClient.get(url);
  }

  createProduct(product: CreateProductType){
    const url = `${this.apiUrl}/products/create-product`;

    return this.httpClient.post(url, product);
  }
}
