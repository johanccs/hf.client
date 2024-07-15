import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

}
