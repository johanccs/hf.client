export class ListProductType {
    constructor(
        public id: string,
        public productName: string,
        public productDescription: string,
        public price: number,
        public quantity: number,
        public imageUrl: string
    ){}
}
