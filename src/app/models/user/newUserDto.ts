import { AccountTypesEnum } from "../enums/accountTypesEnum";

export class NewUserDto {
    constructor(
        public id: number, 
        public name:string, 
        public surnamme:string, 
        public accountType: AccountTypesEnum, 
        public dateRegistered: Date){}
}