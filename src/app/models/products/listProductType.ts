export class ListProductType {
    constructor(
        public id: number,
        public productName: string,
        public productDescription: string,
        public price: number,
        public quantity: number,
        public imageList: string
    ){}
}
