export class NewUserDto {
    constructor(
        public name:string, 
        public surname:string, 
        public email: string,
        public username: string,
        public password: string,
        public isAdmin: boolean, 
        public dateRegistered: string){}
}