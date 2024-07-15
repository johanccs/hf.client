import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private apiUrl = "https://localhost:5001/api/v1";

  constructor(private httpClient: HttpClient) { }

  getInvoicesByClientId(clientId: number){
    const url = `${this.apiUrl}/invoices/${clientId}`;

    return this.httpClient.get(url);
  }

}
