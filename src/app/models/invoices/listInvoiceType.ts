export class ListInvoiceType {
    constructor(
        public id: number, 
        public clientId: number, 
        public clientName: string, 
        public prodId: number, 
        public prodName: string, 
        public prodDesc: string){}
}