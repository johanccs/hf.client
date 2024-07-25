export class CreateProductType {
    constructor(
        public productName: string,
        public productDescription: string,
        public price: number,
        public quantity: number,
        public imageUrl: string
    ){}
}