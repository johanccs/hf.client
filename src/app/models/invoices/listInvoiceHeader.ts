import { ListInvoiceLine } from "./listInvoiceLine";

export class ListInvoiceHeader{
    constructor(
        public id: string, 
        public date: string, 
        public clientId: string){}
}