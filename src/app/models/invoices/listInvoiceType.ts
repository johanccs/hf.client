export class ListInvoiceType {
    constructor(
        public id: number, 
        public clientId: number,
        public clientName: string, 
        public productName: string, 
        public productDescription: string,
        public quantity: number,
        public price, 
        public imageLink: string){}
}