export class InvoiceResponse {
   constructor(
      public id: string, 
      public abbrevId: string,
      public clientId: string, 
      public friendlyName: string, 
      public date: string, 
      public subtotal: number){}
}