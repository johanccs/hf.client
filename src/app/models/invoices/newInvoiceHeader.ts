import { NewInvoiceLine } from "./newInvoiceLine";

export class NewInvoiceHeader {
    constructor(public date: string, public clientId: string, public invoiceLines: NewInvoiceLine[]){}
}